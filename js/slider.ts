import { getElement } from './util';
import noUiSlider from 'noUiSlider';

const sliderElement = getElement('.effect-level__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
});
