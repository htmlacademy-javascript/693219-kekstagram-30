import { renderComments } from './render-comments';
import { getElement } from './util';

const photoElement = getElement('.big-picture');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhoto();
  }
};

const toggleClasses = (isWillBeOpened = true) => {
  photoElement.classList.toggle('hidden', !isWillBeOpened);
  document.body.classList.toggle('modal-open');
};

const renderPhotoInformation = ({ url, likes, description }) => {
  getElement('.big-picture__img img', photoElement).src = url;
  getElement('.likes-count', photoElement).textContent = likes.toString();
  getElement('.social__caption', photoElement).textContent = description;
};

const openPhoto = (photo) => {
  toggleClasses();
  renderPhotoInformation(photo);
  renderComments(photo.comments);
  document.addEventListener('keydown', onDocumentKeydown);
};

function closePhoto() {
  toggleClasses(false);
  document.removeEventListener('keydown', onDocumentKeydown);
}

export { openPhoto, closePhoto };
