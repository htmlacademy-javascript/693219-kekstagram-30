import { getElement } from './util';
import noUiSlider from 'noUiSlider';

const sliderElement = getElement('.effect-level__slider') as HTMLElement &
  noUiSlider.Instance;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  step: 0.1,
  start: 0,
});

// sliderElement.noUiSlider.on('update', () => {
//   console.log(sliderElement.noUiSlider.get());
// });

const updateSlider = (value: string) => {
  // Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
  // Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
  // Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
  // Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
  // Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
};

export { updateSlider };
