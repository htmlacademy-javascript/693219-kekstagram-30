import Pristine from 'pristinejs';
import { form, textHashtags } from './elements';

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
});

pristine.addValidator(
  textHashtags,
  (value) => value.length < 140,
  'Длина комментария больше 140 символов'
);

pristine.addValidator(
  textHashtags,
  (value) => {
    const hashtags = value
      .trim()
      .split(' ')
      .filter((el) => el !== '');
    return hashtags.length - 1 < 5;
  },
  'превышено количество хэш-тегов'
);

pristine.addValidator(
  textHashtags,
  (value) => {
    const hashtags = value
      .trim()
      .split(' ')
      .filter((el) => el !== '');

    const regexPattern = /^#(?=.*[^0-9])[a-zа-яё0-9]{1,19}$/i;

    if (hashtags[0] === '') {
      return true;
    }

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
  (value) => {
    const hashtags = value
      .trim()
      .toLocaleLowerCase()
      .split(' ')
      .filter((el) => el !== '');
    return !(new Set(hashtags).size !== hashtags.length);
  },
  'хэш-теги повторяются'
);

export const isValid = () => pristine.validate();
