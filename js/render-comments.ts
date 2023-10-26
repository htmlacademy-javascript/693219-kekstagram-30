import { photoElement } from './big-picture';
import { Comment } from './mock';
import { getElement } from './util';

const socialCommentsElement = getElement<HTMLUListElement>('.social__comments');

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

const addComments = (comments: Comment[]) => {
  let newComments = comments;

  return () => {
    if (newComments.length <= 5) {
      getElement('.social__comments-loader').classList.add('hidden');
    }

    newComments.slice(0, 5).forEach((comment) => {
      const newCommentElement = createComment(comment);
      socialCommentsElement.appendChild(newCommentElement);
    });
    newComments = newComments.slice(5);

    getElement('.social__comment-shown-count', photoElement).textContent =
      document.querySelectorAll('.social__comment').length.toString();
  };
};

const renderComments = (comments: Comment[]) => {
  const commentsLoader = getElement('.social__comments-loader');

  getElement('.social__comment-total-count', photoElement).textContent =
    comments.length.toString();
  socialCommentsElement.innerHTML = '';

  const addNewComment = addComments(comments);
  commentsLoader.classList.remove('hidden');

  addNewComment();
  commentsLoader.addEventListener('click', addNewComment);
};

export { renderComments };
