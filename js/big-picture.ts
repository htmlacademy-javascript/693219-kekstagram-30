import { Photo, Comment } from './mock';
import { getElement } from './util';

const photoElement = getElement('.big-picture');

const onDocumentKeydown = (evt: KeyboardEvent) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhoto();
  }
};

const toggleClasses = (isWillBeOpened: boolean = true) => {
  photoElement.classList.toggle('hidden', !isWillBeOpened);
  document.body.classList.toggle('modal-open');
};

const createComment = (comment: Comment): HTMLElement => {
  const commentElement: HTMLLIElement = document.createElement('li');
  commentElement.className = 'social__comment';

  const avatarElement: HTMLImageElement = document.createElement('img');
  avatarElement.className = 'social__picture';
  avatarElement.src = comment.avatar;
  avatarElement.alt = comment.name;
  avatarElement.width = 35;
  avatarElement.height = 35;

  const textElement: HTMLParagraphElement = document.createElement('p');
  textElement.className = 'social__text';
  textElement.textContent = comment.message;

  commentElement.appendChild(avatarElement);
  commentElement.appendChild(textElement);

  return commentElement;
};

const renderPhotoInformation = ({ url, likes, description }: Photo) => {
  getElement<HTMLImageElement>('.big-picture__img img', photoElement).src = url;
  getElement('.likes-count', photoElement).textContent = likes.toString();
  getElement('.social__caption', photoElement).textContent = description;
};

const renderComments = ({ comments }: Photo) => {
  const socialCommentsElement =
    getElement<HTMLUListElement>('.social__comments');
  getElement('.social__comment-shown-count', photoElement).textContent =
    comments.length.toString();
  getElement('.social__comment-total-count', photoElement).textContent =
    comments.length.toString();
  socialCommentsElement.innerHTML = '';
  comments.forEach((comment) => {
    const newCommentElement = createComment(comment);
    socialCommentsElement.appendChild(newCommentElement);
  });

  getElement('.social__comment-count').classList.add('hidden');
  getElement('.comments-loader').classList.add('hidden');
};

const openPhoto = (photo: Photo) => {
  toggleClasses();
  renderPhotoInformation(photo);
  renderComments(photo);
  document.addEventListener('keydown', onDocumentKeydown);
};

function closePhoto() {
  toggleClasses(false);
  document.removeEventListener('keydown', onDocumentKeydown);
}

export { openPhoto, closePhoto };
