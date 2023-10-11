interface MyComment {
  id: number;
  avatar: string;
  message: string;
  name: string;
}

interface MyPhoto {
  id: number;
  url: string;
  description: string;
  likes: number;
  comments: MyComment[];
}

interface PhotosArray extends Array<MyPhoto> {}

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

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomAuthorName(): string {
  const randomIndex: number = getRandomNumber(0, names.length - 1);
  return names[randomIndex];
}

function getRandomCommentMessage(): string {
  const randomIndex: number = getRandomNumber(0, sentences.length - 1);
  return sentences[randomIndex];
}

function createComment(): MyComment {
  return {
    id: getRandomNumber(1, 1000),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomCommentMessage(),
    name: getRandomAuthorName(),
  };
}

function createPhoto(id: number): MyPhoto {
  const commentsCount: number = getRandomNumber(0, 30);
  const comments: MyComment[] = Array.from(
    { length: commentsCount },
    createComment
  );

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии ${id}`,
    likes: getRandomNumber(15, 200),
    comments: comments,
  };
}

function generatePhotosArray(length: number = 25): PhotosArray {
  return Array.from({ length }, (_, index) => createPhoto(index + 1));
}

const photos: PhotosArray = generatePhotosArray();

console.log(photos);

export {
  getRandomNumber,
  getRandomAuthorName,
  getRandomCommentMessage,
  createComment,
  createPhoto,
  generatePhotosArray,
  names,
  sentences,
};
