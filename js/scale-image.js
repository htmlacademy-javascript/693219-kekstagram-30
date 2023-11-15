import { getElement } from './util';

const MIN_VALUE = 25;
const MAX_VALUE = 100;
const STEP = 25;

const scaleSmallerButton = getElement('.scale__control--smaller');
const scaleBiggerButton = getElement('.scale__control--bigger');
const scaleValueInput = getElement('.scale__control--value');
const img = getElement('.img-upload__preview img');

const getValue = () => parseInt(scaleValueInput.value, 10);

const changeImage = (value) => {
  scaleValueInput.setAttribute('value', `${value}%`);
  img.style.transform = `scale(${value / 100})`;
};

const onScaleSmallerButton = () => {
  const value = getValue();
  let nextValue = value - STEP;
  nextValue = nextValue < MIN_VALUE ? MIN_VALUE : nextValue;

  changeImage(nextValue);
};

const onScaleBiggerButton = () => {
  const value = getValue();

  let nextValue = value + STEP;
  nextValue = nextValue > MAX_VALUE ? MAX_VALUE : nextValue;

  changeImage(nextValue);
};

scaleSmallerButton.addEventListener('click', onScaleSmallerButton);
scaleBiggerButton.addEventListener('click', onScaleBiggerButton);
