import { getElement } from './util';

const imageInput = getElement<HTMLInputElement>('.img-upload__input');
const imageUpload = getElement<HTMLElement>('.img-upload__overlay');
const closeImageButton = getElement<HTMLButtonElement>('.img-upload__cancel');
const form = getElement<HTMLFormElement>('.img-upload__form');

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
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onCloseImageUpload();
  }
}

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
});

pristine.addValidator(
  form.querySelector('.text__description'),
  (value: string) => value.length < 140,
  'Длина комментария больше 140 символов'
);

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  (value: string) => {
    const hashtags = value.trim().split(' ');
    return hashtags.length - 1 < 5;
  },
  'превышено количество хэш-тегов'
);

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  (value: string) => {
    const hashtags = value.trim().split(' ');
    const regexPattern = /^#(?=.*[^0-9])[a-zа-яё0-9]{1,29}$/i;

    for (const element of hashtags) {
      if (!regexPattern.test(element)) {
        return false;
      }
    }

    return true;
  },
  'введён невалидный хэш-тег'
);

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  (value: string) => {
    const hashtags = value.trim().toLocaleLowerCase().split(' ');
    return !(new Set(hashtags).size !== hashtags.length);
  },
  'хэш-теги повторяются'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  pristine.validate();
});

imageInput.addEventListener('change', onOpenImageUpload);
closeImageButton.addEventListener('click', onCloseImageUpload);
