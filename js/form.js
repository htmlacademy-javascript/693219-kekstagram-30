import { form } from './elements';
import { changeImage } from './scale-image';
import { isValid } from './validate-form';
import { sendData } from './api';
import { resetEffect } from './slider';

const imageInput = document.querySelector('.img-upload__input');
const imageUpload = document.querySelector('.img-upload__overlay');
const closeImageButton = document.querySelector('.img-upload__cancel');

const toggleClasses = (isOpen = true) => {
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

function onDocumentKeydown(evt) {
  const isForm =
    document.activeElement === document.querySelector('.text__hashtags') ||
    document.activeElement === document.querySelector('.text__description');

  if (evt.key === 'Escape' && !isForm) {
    evt.preventDefault();
    onCloseImageUpload();
  }
}

imageInput.addEventListener('change', onOpenImageUpload);
closeImageButton.addEventListener('click', onCloseImageUpload);

const resetForm = () => {
  resetEffect();
  form.reset();
  changeImage(100);
  onCloseImageUpload();
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (isValid()) {
    const data = new FormData(evt.target);
    sendData(data);
    resetForm();
  }
});
