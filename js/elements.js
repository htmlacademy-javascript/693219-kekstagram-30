

const form = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const sliderElement = document.querySelector('.effect-level__slider');
const image = document.querySelector('.img-upload__preview img');
const effectsWrapper = document.querySelector('.effects__list');
const sliderFieldset = document.querySelector('.img-upload__effect-level');
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValueInput = document.querySelector('.scale__control--value');
const picturesElement = document.querySelector('.pictures');
const pictureFragment = document.querySelector('#picture').content.firstElementChild;
const photoCloseElement = document.querySelector('.big-picture__cancel');



export {
  form,
  textHashtags,
  sliderElement ,
  image,
  effectsWrapper,
  sliderFieldset,
  scaleSmallerButton,
  scaleBiggerButton,
  scaleValueInput,
  picturesElement,
  pictureFragment,
  photoCloseElement
}

