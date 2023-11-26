import { openPhoto, onClosePhotoButtonClick } from './big-picture.js';
import {
  picturesElement,
  pictureFragment,
  photoCloseElement,
} from './elements.js';

const removePictures = () =>
  document.querySelectorAll('.picture').forEach((picture) => {
    picture.remove();
  });

const renderPhoto = (photos) => {
  removePictures();

  photos.forEach((photo) => {
    const { comments, description, likes, url } = photo;
    const pictureElement = pictureFragment.cloneNode(true);
    const image = pictureElement.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    pictureElement.querySelector('.picture__likes').textContent =
      likes.toString();
    pictureElement.querySelector('.picture__comments').textContent =
      comments.length.toString();
    picturesElement.appendChild(pictureElement);
    pictureElement.addEventListener('click', () => openPhoto(photo));
  });
  photoCloseElement.addEventListener('click', onClosePhotoButtonClick);
};

export { renderPhoto };
