import { generatePhotosArray } from './mock';
import { Photo } from './mock';

const picturesElement = document.querySelector<HTMLElement>('.pictures');
const pictureFragment = document
  .querySelector<HTMLTemplateElement>('#picture')
  ?.content.querySelector<HTMLAnchorElement>('.picture');

if (!picturesElement || !pictureFragment) {
  throw new Error('Не удалось найти элементы в DOM');
}

const similarPhotos: Photo[] = generatePhotosArray(25);

const picturesListFragment: DocumentFragment =
  document.createDocumentFragment();

similarPhotos.forEach(({ comments, description, likes, url }: Photo) => {
  const pictureElement = pictureFragment.cloneNode(true) as HTMLElement;

  if (!pictureElement) {
    throw new Error('Не удалось клонировать элемент');
  }

  const pictureImg =
    pictureElement.querySelector<HTMLImageElement>('.picture__img');
  const pictureLikes =
    pictureElement.querySelector<HTMLElement>('.picture__likes');
  const pictureComments =
    pictureElement.querySelector<HTMLElement>('.picture__comments');

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
