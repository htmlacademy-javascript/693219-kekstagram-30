import { generatePhotosArray, Photo } from './mock.js';
import { openPhoto, closePhoto } from './big-picture.js';
import { getElement } from './util.js';

const picturesElement = getElement('.pictures');
const pictureFragmentElement = getElement('#picture').content;
const pictureFragment = getElement('.picture', pictureFragmentElement);
const photoCloseElement = getElement('.big-picture__cancel');

/**
 * Функция для генерациия фотографий на сайте
 * @param i - Количество фотографий которые нужно сгененрировать
 */
const renderPhoto = (i: number) => {
  // Создаем фейк данные
  const mockPhotos: Photo[] = generatePhotosArray(i);

  // Создаем миниаютюры для фейк данных
  mockPhotos.forEach((photo: Photo) => {
    const { comments, description, likes, url } = photo;

    // Клонируем шаблон
    const pictureElement = pictureFragment.cloneNode(true) as HTMLElement;

    // Добавляем в него фейк данные
    getElement('.picture__img', pictureElement).src = url;
    getElement('.picture__img', pictureElement).alt = description;
    getElement('.picture__likes', pictureElement).textContent =
      likes.toString();
    getElement('.picture__comments', pictureElement).textContent =
      comments.length.toString();

    //  Добавляем элемент в разметку
    picturesElement.appendChild(pictureElement);

    // Добавить событие открытия карточки
    pictureElement.addEventListener('click', () => openPhoto(photo));
  });

  // Добавляем событие закрытия карточки
  photoCloseElement.addEventListener('click', closePhoto);
};

export { renderPhoto };
