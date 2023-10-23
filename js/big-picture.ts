import { Photo } from './mock';

const photoElement = document.querySelector<HTMLElement>('.big-picture');
const photoCloseElement = document.querySelector<HTMLButtonElement>(
  '.big-picture__cancel'
);

const onDocumentKeydown = (evt: KeyboardEvent) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    // eslint-disable-next-line
    closePhoto();
  }
};

const openPhoto = (event: Event, photo: Photo) => {
  console.log(photo);
  const target = event.target as HTMLInputElement;

  if (target.matches('.picture__img')) {
    photoElement?.classList.remove('hidden');
  }

  document.addEventListener('keydown', onDocumentKeydown);
};

const closePhoto = () => {
  photoElement?.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

photoCloseElement?.addEventListener('click', closePhoto);

export { openPhoto };
