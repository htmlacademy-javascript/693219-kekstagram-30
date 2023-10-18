import { generatePhotosArray } from './mock';
import { Photo } from './mock';

const picturesElement = document.querySelector<HTMLElement>('.pictures');
const pictureFragment: HTMLTemplateElement | null =
  document.querySelector('#picture');

if (!picturesElement || !pictureFragment) {
  throw new Error('Не удалось найти элементы в DOM');
}

const similarPhotos: Photo[] = generatePhotosArray(22);

const picturesListFragment: DocumentFragment =
  document.createDocumentFragment();

similarPhotos.forEach(({ comments, description, likes, url }: Photo) => {
  const pictureElement = pictureFragment.content.cloneNode(true) as HTMLElement;

  if (!pictureElement) {
    throw new Error('Не удалось клонировать элемент');
  }

  const pictureImg: HTMLImageElement | null =
    pictureElement.querySelector('.picture__img');
  const pictureLikes: HTMLElement | null =
    pictureElement.querySelector('.picture__likes');
  const pictureComments: HTMLElement | null =
    pictureElement.querySelector('.picture__comments');

  if (!pictureImg || !pictureLikes || !pictureComments) {
    throw new Error('Не удалось найти элементы в клонированном элементе');
  }

  pictureImg.src = url;
  pictureImg.alt = description;
  pictureLikes.textContent = likes.toString();
  pictureComments.textContent = comments.length.toString();

  picturesListFragment.appendChild(pictureElement);
});

picturesElement.appendChild(picturesListFragment);
