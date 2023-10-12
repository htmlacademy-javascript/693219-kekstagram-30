/**
 * Генерация случайного числа в заданном диапазоне
 * @param min
 * @param max
 * @returns
 */
const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Возвращает случайный элемент из массива строк.
 * @param {string[]} array - Исходный массив строк.
 * @returns {string } - Случайная строка из массива.
 */
const getRandomStringElement = (array: string[]): string => {
  const randomIndex: number = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export { getRandomNumber, getRandomStringElement };
