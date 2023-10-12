import { expect, test } from 'vitest';
import { getRandomStringElement, getRandomNumber } from '../js/util';
import {
  createComment,
  createPhoto,
  generatePhotosArray,
  names,
  sentences,
} from '../js/data';

function getRandomAuthorIndex(): number {
  return getRandomNumber(0, names.length - 1);
}

function getRandomSentenceIndex(): number {
  return getRandomNumber(0, sentences.length - 1);
}

test('getRandomNumber должна возвращать случайную строку из массива', () => {
  const stringArray: string[] = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
  const result = getRandomStringElement(stringArray);
  expect(stringArray).toContain(result);
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
