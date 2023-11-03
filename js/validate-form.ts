import { getElement } from './util';

const form = getElement<HTMLFormElement>('.img-upload__form');
const textHashtags = form.querySelector<HTMLInputElement>('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
});

pristine.addValidator(
  textHashtags,
  (value: string) => value.length < 140,
  'Длина комментария больше 140 символов'
);

pristine.addValidator(
  textHashtags,
  (value: string) => {
    const hashtags = value.trim().split(' ');
    return hashtags.length - 1 < 5;
  },
  'превышено количество хэш-тегов'
);

pristine.addValidator(
  textHashtags,
  (value: string) => {
    const hashtags = value.trim().split(' ');
    console.log(hashtags);
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
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
