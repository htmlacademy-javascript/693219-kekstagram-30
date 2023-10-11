/**
 * @description Генерация случайного числа в заданном диапазоне
 * @param min
 * @param max
 * @returns
 */
const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export { getRandomNumber };
