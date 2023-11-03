import { getElement } from './util';

const img = getElement('.img-upload__preview img');
const effectNone = getElement('[for="effect-none"]');
const effectChrome = getElement('[for="effect-chrome"]');
const effectSepia = getElement('[for="effect-sepia"]');
const effectMarvin = getElement('[for="effect-marvin"]');
const effectPhobos = getElement('[for="effect-phobos"]');
const effectHeat = getElement('[for="effect-heat"]');
const sliderElement = getElement('.img-upload__effect-level');

const toggleClass = (isHidden: boolean = false) => {
  sliderElement.classList.toggle('hidden', isHidden);
};

toggleClass(true);

effectNone.addEventListener('click', () => {
  img.style.filter = '';
  toggleClass(true);
});

effectChrome.addEventListener('click', () => {
  img.style.filter = 'grayscale(1)';
  toggleClass(false);
});

effectSepia.addEventListener('click', () => {
  img.style.filter = 'sepia(1)';
  toggleClass(false);
});

effectMarvin.addEventListener('click', () => {
  img.style.filter = 'invert(100%)';
  toggleClass(false);
});

effectPhobos.addEventListener('click', () => {
  img.style.filter = 'blur(3px)';
  toggleClass(false);
});

effectHeat.addEventListener('click', () => {
  img.style.filter = 'brightness(3)';
  toggleClass(false);
});
