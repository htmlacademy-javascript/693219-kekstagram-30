import { getElement } from './util';
import { updateSlider } from './slider';

const img = getElement('.img-upload__preview img');
const list = getElement('.effects__list');

type data = {
  [key: string]: string;
  none: string;
  chrome: string;
  sepia: string;
  marvin: string;
  phobos: string;
  heat: string;
};

const sliderElement = getElement('.img-upload__effect-level');

const toggleClass = (isHidden: boolean = false) => {
  sliderElement.classList.toggle('hidden', isHidden);
};

list.addEventListener('change', (evt) => {
  const data: data = {
    none: '',
    chrome: 'grayscale(1)',
    sepia: 'sepia(1)',
    marvin: 'invert(100%)',
    phobos: 'blur(3px)',
    heat: 'brightness(3)',
  };

  const target = evt.target as HTMLInputElement;
  const val: string = target.value;

  updateSlider(val);

  if (val in data) {
    img.style.filter = data[val];
  } else {
    throw new Error(`Некорректное значение фильтра:${val}`);
  }

  toggleClass(true);
  if (val !== 'none') {
    toggleClass();
  }
});
