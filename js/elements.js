const form = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const sliderElement = document.querySelector('.effect-level__slider');
const image = document.querySelector('.img-upload__preview img');
const effectsWrapper = document.querySelector('.effects__list');
const sliderFieldset = document.querySelector('.img-upload__effect-level');
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValueInput = document.querySelector('.scale__control--value');
const picturesElement = document.querySelector('.pictures');
const pictureFragment =
  document.querySelector('#picture').content.firstElementChild;
const photoCloseElement = document.querySelector('.big-picture__cancel');
const photoElement = document.querySelector('.big-picture');
const list = document.querySelector('.social__comments');
const loaderButton = document.querySelector('.social__comments-loader');
const totalCount = photoElement.querySelector('.social__comment-total-count');
const shownCount = photoElement.querySelector('.social__comment-shown-count');

export {
  form,
  textHashtags,
  sliderElement,
  image,
  effectsWrapper,
  sliderFieldset,
  scaleSmallerButton,
  scaleBiggerButton,
  scaleValueInput,
  picturesElement,
  pictureFragment,
  photoCloseElement,
  photoElement,
  list,
  loaderButton,
  totalCount,
  shownCount,
  textDescription,
};
