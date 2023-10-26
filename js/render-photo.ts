import { generatePhotosArray, Photo } from './mock.js';
import { openPhoto, closePhoto } from './big-picture.js';
import { getElement } from './util.js';

const picturesElement = getElement('.pictures');
const pictureFragment =
  getElement<HTMLTemplateElement>('#picture').content.firstElementChild!;
const photoCloseElement = getElement('.big-picture__cancel');

/**
 * Функция для генерациия фотографий на сайте
 * @param amount - Количество фотографий которые нужно сгененрировать
 */
const renderPhoto = (amount: number) => {
  // Создаем фейк данные
  const mockPhotos = generatePhotosArray(amount);

  // Создаем миниаютюры для фейк данных
  mockPhotos.forEach((photo: Photo) => {
    const { comments, description, likes, url } = photo;

    // Клонируем шаблон
    const pictureElement = pictureFragment.cloneNode(true) as HTMLElement;

    // Добавляем в него фейк данные
    const image = getElement<HTMLImageElement>('.picture__img', pictureElement);
    image.src = url;
    image.alt = description;
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
