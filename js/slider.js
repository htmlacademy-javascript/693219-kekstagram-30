import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { EFFECT_OPTION_MAP } from './effect-map';
import {
  sliderElement,
  image,
  effectsWrapper,
  sliderFieldset,
  form,
} from './elements';

const CHANGE_EVENT = new Event('change');

const slider = noUiSlider.create(sliderElement, EFFECT_OPTION_MAP.none.slider);

sliderFieldset.hidden = true;

effectsWrapper.addEventListener('change', () => {
  const effect = form.effect.value;

  sliderFieldset.hidden = effect === 'none';

  slider.updateOptions(EFFECT_OPTION_MAP[effect].slider, false);
});

slider.on('update', () => {
  const value = slider.get();
  form['effect-level'].value = String(value);

  const currentEffect = form.effect.value;

  if (currentEffect === 'none') {
    return image.style.removeProperty('filter');
  }

  const filter = EFFECT_OPTION_MAP[currentEffect].filter;
  image.style.filter = filter(value);
});

export const resetEffect = () => {
  form.effect.value = 'none';
  effectsWrapper.dispatchEvent(CHANGE_EVENT);
};
