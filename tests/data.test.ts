import { expect, test } from 'vitest';
import {
  getRandomElement,
  getRandomNumber,
  createUniqueIdGenerator,
} from '../js/util';
import { generatePhotosArray } from '../js/mock';

test('getRandomNumber должна возвращать случайную строку из массива', () => {
  const stringArray: string[] = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
  const result = getRandomElement(stringArray);
  expect(stringArray).toContain(result);
});

test('getRandomNumber генерирует число в указанном диапазоне', () => {
  const min = 1;
  const max = 10;
  const result = getRandomNumber(min, max);
  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThanOrEqual(max);
});

test('generatePhotosArray возвращает массив указанной длины', () => {
  const length = 5;
  const photosArray = generatePhotosArray(length);
  expect(photosArray).toHaveLength(length);
});

test('generateRandomId проверяем, что id уникальны', () => {
  const generateRandomId = createUniqueIdGenerator(1, 10);
  const generatedIds = new Set<number>();

  for (let i = 0; i < 10; i++) {
    const randomId = generateRandomId();

    expect(generatedIds.has(randomId)).toBe(false);
    generatedIds.add(randomId);
  }
});

test('generateRandomId ожидаем ошибку при попытке генерации нового id', () => {
  const generateAllIds = createUniqueIdGenerator(1, 3);

  for (let i = 1; i <= 3; i++) {
    generateAllIds();
  }
  expect(() => generateAllIds()).toThrowError(
    'Исчерпаны все доступные id в заданном диапазоне'
  );
});

test('generateRandomId ожидаем ошибку при создании генератора с некорректным диапазоном', () => {
  expect(() => createUniqueIdGenerator(50, 3)).toThrowError(
    'Некорректный диапазон чисел'
  );
});
