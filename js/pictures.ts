import { generatePhotosArray } from './mock';
import { Photo } from './mock';
import { openPhoto } from './big-picture.js';

const picturesElement = document.querySelector<HTMLElement>('.pictures');
const pictureFragment = document
  .querySelector<HTMLTemplateElement>('#picture')
  ?.content.querySelector<HTMLAnchorElement>('.picture');

const similarPhotos: Photo[] = generatePhotosArray(25);

const picturesListFragment: DocumentFragment =
  document.createDocumentFragment();

similarPhotos.forEach(({ comments, description, likes, url }: Photo) => {
  const pictureElement = pictureFragment?.cloneNode(true) as HTMLElement;

  const pictureImg =
    pictureElement.querySelector<HTMLImageElement>('.picture__img');
  const pictureLikes =
    pictureElement.querySelector<HTMLElement>('.picture__likes');
  const pictureComments =
    pictureElement.querySelector<HTMLElement>('.picture__comments');

  pictureImg!.src = url;
  pictureImg!.alt = description;
  pictureLikes!.textContent = likes.toString();
  pictureComments!.textContent = comments.length.toString();

  picturesListFragment.appendChild(pictureElement);
});

picturesElement?.appendChild(picturesListFragment);

const photos = document.querySelectorAll('a.picture');

photos.forEach((el) => {
  el.addEventListener('click', openPhoto);
});
