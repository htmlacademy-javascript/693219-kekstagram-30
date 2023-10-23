const photoElement = document.querySelector<HTMLElement>('.big-picture');
const picturesContainer = document.querySelector<HTMLElement>(
  '.pictures.container'
);
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

const openPhoto = (event: Event) => {
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

picturesContainer?.addEventListener('click', openPhoto);
photoCloseElement?.addEventListener('click', closePhoto);
