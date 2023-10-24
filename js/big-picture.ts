import { Photo, Comment } from './mock';
import { getElement } from './util';

const onDocumentKeydown = (evt: KeyboardEvent) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    // eslint-disable-next-line
    closePhoto();
  }
};

/**
 * Создает елемент комментария для встаки в картчоку
 * @param comment - Обьект коментария из mock данных
 * @returns Элемент комментария
 */
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

/**
 * Открывает фото по клику на миниатюре, подставляя данные обьекта мок данных
 * @param photo Обьект фотографии для получения нужных даннх и обновления карточки
 */
const openPhoto = (photo: Photo) => {
  const photoElement = getElement('.big-picture');
  const socialCommentsElement = getElement('.social__comments');

  // Показывем карточку фотографии
  photoElement?.classList.remove('hidden');

  // Добавляем событие на ESC
  document.addEventListener('keydown', onDocumentKeydown);

  // Адрес изображения.
  getElement('.big-picture__img img', photoElement).src = photo.url;

  // Количество лайков.
  getElement('.likes-count', photoElement).textContent = photo.likes.toString();

  // Количество показанных комментариев.
  getElement('.social__comment-shown-count', photoElement).textContent =
    photo.comments.length.toString();

  // Общее количество комментариев к фотографии.
  getElement('.social__comment-total-count', photoElement).textContent =
    photo.comments.length.toString();

  // Список комментариев под фотографией
  socialCommentsElement!.innerHTML = '';
  photo.comments.forEach((comment) => {
    const newCommentElement = createComment(comment);
    socialCommentsElement?.appendChild(newCommentElement);
  });

  // Описание фотографии.
  getElement('.social__caption', photoElement).textContent = photo.description;
};

/**
 * Закрывает карточку фотографии и удаляет событие с кнопки ESC
 */
const closePhoto = () => {
  const photoElement = getElement('.big-picture');

  photoElement?.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

export { openPhoto, closePhoto };
