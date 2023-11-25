import { list, loaderButton, totalCount, shownCount } from './elements';

const PACK_SIZE = 5;
let allComments = [];

const createComment = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.className = 'social__comment';

  const avatarElement = document.createElement('img');
  avatarElement.className = 'social__picture';
  avatarElement.src = comment.avatar;
  avatarElement.alt = comment.name;
  avatarElement.width = 35;
  avatarElement.height = 35;

  const textElement = document.createElement('p');
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
  const commentsToRender = allComments.slice(
    currentShowedAmount,
    nextShowedAmount
  );

  commentsToRender.forEach((comment) => {
    const newCommentElement = createComment(comment);
    list.appendChild(newCommentElement);
  });

  shownCount.textContent = nextShowedAmount.toString();

  loaderButton.classList.toggle(
    'hidden',
    nextShowedAmount >= allComments.length
  );
};

const renderComments = (comments) => {
  allComments = comments;
  totalCount.textContent = comments.length.toString();
  list.innerHTML = '';
  loadNextComments();
};

loaderButton.addEventListener('click', loadNextComments);

export { renderComments };
