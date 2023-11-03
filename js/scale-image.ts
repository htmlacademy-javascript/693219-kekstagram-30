import { getElement } from './util';

const MIN_VALUE = 25;
const MAX_VALUE = 100;
const STEP = 25;

const scaleSmallerButton = getElement('.scale__control--smaller');
const scaleBiggerButton = getElement('.scale__control--bigger');
const scaleValueInput = getElement<HTMLInputElement>('.scale__control--value');
const img = getElement<HTMLImageElement>('.img-upload__preview img');

const getValue = (): number =>
  Number(scaleValueInput.getAttribute('value')?.slice(0, -1));

const changeImage = (value: number) => {
  scaleValueInput.setAttribute('value', `${value}%`);
  img.style.transform = `scale(${value / 100})`;
};

const onScaleSmallerButton = () => {
  const value = getValue();

  if (value - STEP <= MIN_VALUE) {
    changeImage(MIN_VALUE);
  } else {
    changeImage(value - STEP);
  }
};

const onScaleBiggerButton = () => {
  const value = getValue();

  if (value + STEP >= MAX_VALUE) {
    changeImage(MAX_VALUE);
  } else {
    changeImage(value + STEP);
  }
};

scaleSmallerButton.addEventListener('click', onScaleSmallerButton);
scaleBiggerButton.addEventListener('click', onScaleBiggerButton);
