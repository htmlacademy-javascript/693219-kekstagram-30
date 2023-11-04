import { Comment } from './mock';
import { getElement } from './util';

const PACK_SIZE = 5;

const list = getElement<HTMLUListElement>('.social__comments');
const loaderButton = getElement('.social__comments-loader');
const photoElement = getElement('.big-picture');
const totalCount = getElement('.social__comment-total-count', photoElement);
const shownCount = getElement('.social__comment-shown-count', photoElement);
let allComments: Comment[] = [];

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

const loadNextComments = () => {
  const currentShowedAmount = list.childElementCount;
  let nextShowedAmount = currentShowedAmount + PACK_SIZE;
  const isAllWillBeShown = nextShowedAmount >= allComments.length;
  nextShowedAmount = isAllWillBeShown ? allComments.length : nextShowedAmount;
  const commentToRender = allComments.slice(
    currentShowedAmount,
    nextShowedAmount
  );

  commentToRender.forEach((comment) => {
    const newCommentElement = createComment(comment);
    list.appendChild(newCommentElement);
  });

  shownCount.textContent = nextShowedAmount.toString();

  loaderButton.classList.toggle(
    'hidden',
    nextShowedAmount >= allComments.length
  );
};

const renderComments = (comments: Comment[]) => {
  allComments = comments;
  totalCount.textContent = comments.length.toString();
  list.innerHTML = '';
  loadNextComments();
};

loaderButton.addEventListener('click', loadNextComments);

export { renderComments };
