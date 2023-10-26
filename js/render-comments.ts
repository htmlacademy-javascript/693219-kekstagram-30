import { photoElement } from './big-picture';
import { Comment } from './mock';
import { getElement } from './util';

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

const renderComments = (comments: Comment[]) => {
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
};

export { renderComments };
