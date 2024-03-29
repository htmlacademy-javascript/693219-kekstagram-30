import {
  scaleSmallerButton,
  scaleBiggerButton,
  scaleValueInput,
  image,
} from './elements';

const MIN_VALUE = 25;
const MAX_VALUE = 100;
const STEP = 25;

const getValue = () => parseInt(scaleValueInput.value, 10);

export const changeImage = (value) => {
  scaleValueInput.setAttribute('value', `${value}%`);
  image.style.transform = `scale(${value / 100})`;
};

const onScaleSmallerButtonClick = () => {
  const value = getValue();
  let nextValue = value - STEP;
  nextValue = nextValue < MIN_VALUE ? MIN_VALUE : nextValue;

  changeImage(nextValue);
};

const onScaleBiggerButtonClick = () => {
  const value = getValue();

  let nextValue = value + STEP;
  nextValue = nextValue > MAX_VALUE ? MAX_VALUE : nextValue;

  changeImage(nextValue);
};

scaleSmallerButton.addEventListener('click', onScaleSmallerButtonClick);
scaleBiggerButton.addEventListener('click', onScaleBiggerButtonClick);
