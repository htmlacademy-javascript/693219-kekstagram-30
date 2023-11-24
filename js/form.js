import { form } from './elements';
import { changeImage } from './scale-image';
import { isValid } from './validate-form';
import { sendData } from './api';
import { resetEffect } from './slider';
import { resetPristine } from './validate-form';

const imageInput = document.querySelector('.img-upload__input');
const imageUpload = document.querySelector('.img-upload__overlay');
const closeImageButton = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('#upload-submit');

const toggleClasses = (isOpen = true) => {
  imageUpload.classList.toggle('hidden', !isOpen);
  document.body.classList.toggle('modal-open', isOpen);
};

const toggleSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
  submitButton.textContent = isDisabled ? 'Отправляю...' : 'Опубликовать';
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

const resetForm = () => {
  resetEffect();
  form.reset();
  changeImage(100);
  onCloseImageUpload();
  resetPristine();
};

function onDocumentKeydown(evt) {
  const isError = document.querySelector('.error');

  const isForm =
    document.activeElement === document.querySelector('.text__hashtags') ||
    document.activeElement === document.querySelector('.text__description');

  if (evt.key === 'Escape' && !isForm && !isError) {
    evt.preventDefault();
    onCloseImageUpload();
    resetForm();
  }
}

imageInput.addEventListener('change', onOpenImageUpload);
closeImageButton.addEventListener('click', onCloseImageUpload);

const showSuccess = () => {
  const errorFragment =
    document.querySelector('#success').content.firstElementChild;

  const successElement = errorFragment.cloneNode(true);
  document.body.appendChild(successElement);

  document.querySelector('.success').addEventListener('click', (evt) => {
    if (evt.target.classList.value === 'success__inner') {
      return;
    }
    successElement.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successElement.remove();
    }
  });
};

const showAlertSendData = () => {
  const errorFragment =
    document.querySelector('#error').content.firstElementChild;

  const errorElement = errorFragment.cloneNode(true);
  document.body.appendChild(errorElement);

  document.querySelector('.error').addEventListener('click', (evt) => {
    if (evt.target.classList.value === 'error__inner') {
      return;
    }
    errorElement.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      errorElement.remove();
    }
  });
};

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  if (isValid()) {
    try {
      toggleSubmitButton(true);
      await sendData(new FormData(evt.target));
      showSuccess();
      resetForm();
    } catch (err) {
      showAlertSendData();
    } finally {
      toggleSubmitButton();
    }
  }
});
