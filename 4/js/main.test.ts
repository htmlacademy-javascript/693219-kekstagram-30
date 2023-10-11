import { expect, test } from 'vitest';
import {
  getRandomNumber,
  getRandomAuthorName,
  getRandomCommentMessage,
  createComment,
  createPhoto,
  generatePhotosArray,
  names,
  sentences,
} from './main';

function getRandomAuthorIndex(): number {
  return getRandomNumber(0, names.length - 1);
}

function getRandomSentenceIndex(): number {
  return getRandomNumber(0, sentences.length - 1);
}

test('getRandomNumber generates a number within the specified range', () => {
  const min = 1;
  const max = 10;
  const result = getRandomNumber(min, max);
  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThanOrEqual(max);
});

test('getRandomNumber генерирует число в указанном диапазоне', () => {
  const min = 1;
  const max = 10;
  const result = getRandomNumber(min, max);
  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThanOrEqual(max);
});

test('getRandomAuthorIndex возвращает корректный индекс', () => {
  const result = getRandomAuthorIndex();
  expect(result).toBeGreaterThanOrEqual(0);
  expect(result).toBeLessThan(names.length);
});

test('getRandomSentenceIndex возвращает корректный индекс', () => {
  const result = getRandomSentenceIndex();
  expect(result).toBeGreaterThanOrEqual(0);
  expect(result).toBeLessThan(sentences.length);
});

test('getRandomAuthorName возвращает корректное имя', () => {
  const result = getRandomAuthorName();
  expect(names).toContain(result);
});

test('getRandomCommentMessage возвращает корректное предложение', () => {
  const result = getRandomCommentMessage();
  expect(sentences).toContain(result);
});

test('createComment возвращает корректный объект комментария', () => {
  const comment = createComment();
  expect(comment).toHaveProperty('id');
  expect(comment).toHaveProperty('avatar');
  expect(comment).toHaveProperty('message');
  expect(comment).toHaveProperty('name');
});

test('createPhoto возвращает корректный объект фотографии', () => {
  const photo = createPhoto(1);
  expect(photo).toHaveProperty('id');
  expect(photo).toHaveProperty('url');
  expect(photo).toHaveProperty('description');
  expect(photo).toHaveProperty('likes');
  expect(photo).toHaveProperty('comments');
});

test('generatePhotosArray возвращает массив указанной длины', () => {
  const length = 5;
  const photosArray = generatePhotosArray(length);
  expect(photosArray).toHaveLength(length);
});
