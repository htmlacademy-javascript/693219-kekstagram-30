import {
  getRandomNumber,
  getRandomElement,
  createUniqueIdGenerator,
} from './util';

export interface Comment {
  id: number;
  avatar: string;
  message: string;
  name: string;
}

export interface Photo {
  id: number;
  url: string;
  description: string;
  likes: number;
  comments: Comment[];
}

type PhotosArray = Photo[];

const names: string[] = [
  'Алексей',
  'Елена',
  'Иван',
  'Ольга',
  'Дмитрий',
  'Анна',
];

const sentences: string[] = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

/**
 * Создает комментарий с случайными данными.
 * @returns Объект комментария.
 */
const createComment = (id: number): Comment => ({
  id,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomElement(sentences),
  name: getRandomElement(names),
});

/**
 * Создает фотографию с случайными данными.
 * @param id - Идентификатор фотографии.
 * @returns Объект фотографии.
 */
const createPhoto = (id: number, mockComment: () => Comment): Photo => {
  const commentsCount: number = getRandomNumber(0, 30);
  const comments: Comment[] = Array.from(
    { length: commentsCount },
    mockComment
  );

  return {
    id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии ${id}`,
    likes: getRandomNumber(15, 200),
    comments,
  };
};

/**
 * Генерирует массив фотографий с случайными данными.
 * @param length - Длина массива фотографий (по умолчанию 25).
 * @returns Массив фотографий.
 */
const generatePhotosArray = (length: number = 25): PhotosArray => {
  const generateRandomPhotoId = createUniqueIdGenerator(1, length);
  const generateRandomCommentId = createUniqueIdGenerator(1, 1000);

  const mockComment = () => createComment(generateRandomCommentId());

  return Array.from({ length }, () => {
    return createPhoto(generateRandomPhotoId(), mockComment);
  });
};

export { createComment, createPhoto, generatePhotosArray, names, sentences };