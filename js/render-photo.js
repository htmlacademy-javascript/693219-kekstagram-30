import { openPhoto, closePhoto } from './big-picture.js';
import { getElement } from './util.js';

const picturesElement = getElement('.pictures');
const pictureFragment =
  getElement('#picture').content.firstElementChild;
const photoCloseElement = getElement('.big-picture__cancel');

const renderPhoto = (photos) => {
  photos.forEach((photo) => {
    const { comments, description, likes, url } = photo;
    const pictureElement = pictureFragment.cloneNode(true);
    const image = getElement('.picture__img', pictureElement);
    image.src = url;
    image.alt = description;
    getElement('.picture__likes', pictureElement).textContent =
      likes.toString();
    getElement('.picture__comments', pictureElement).textContent =
      comments.length.toString();
    picturesElement.appendChild(pictureElement);
    pictureElement.addEventListener('click', () => openPhoto(photo));
  });
  photoCloseElement.addEventListener('click', closePhoto);
};

export { renderPhoto };
