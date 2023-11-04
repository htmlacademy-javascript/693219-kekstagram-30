import { getElement } from './util';

const imageInput = getElement<HTMLInputElement>('.img-upload__input');
const imageUpload = getElement<HTMLElement>('.img-upload__overlay');
const closeImageButton = getElement<HTMLButtonElement>('.img-upload__cancel');

const toggleClasses = (isOpen: boolean = true) => {
  imageUpload.classList.toggle('hidden', !isOpen);
  document.body.classList.toggle('modal-open', isOpen);
};

const onOpenImageUpload = () => {
  toggleClasses();
  document.addEventListener('keydown', onDocumentKeydown);
};

const onCloseImageUpload = () => {
  imageInput.value = '';
  toggleClasses(false);
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt: KeyboardEvent) {
  const isForm =
    document.activeElement === getElement('.text__hashtags') ||
    document.activeElement === getElement('.text__description');

  // console.log(isForm);
  if (evt.key === 'Escape' && !isForm) {
    evt.preventDefault();
    onCloseImageUpload();
  }
}

imageInput.addEventListener('change', onOpenImageUpload);
closeImageButton.addEventListener('click', onCloseImageUpload);
