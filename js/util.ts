/**
 * Генерация случайного числа в заданном диапазоне
 * @param min
 * @param max
 * @returns
 */
const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Возвращает случайный элемент из массива.
 * @param Исходный массив.
 * @returns Случайная элемент из массива.
 */
const getRandomElement = <T>(array: T[]): T | undefined =>
  array[getRandomNumber(0, array.length - 1)];

/**
 * Создает генератор уникальных идентификаторов в заданном диапазоне чисел.
 *
 * @param min - Минимальное значение диапазона.
 * @param max - Максимальное значение диапазона.
 * @returns  Функция, генерирующая уникальные идентификаторы.
 *
 * @example
 * const generateRandomId = createUniqueIdGenerator(1, 10);
 * const randomId = generateRandomId(); // Возвращает уникальный идентификатор в диапазоне [1, 10].
 */
function createUniqueIdGenerator(min: number, max: number): () => number {
  const usedIds: Set<number> = new Set();

  if (min > max) {
    throw new Error('Некорректный диапазон чисел');
  }

  return function (): number {
    const availableIds: number[] = [];
    for (let i = min; i <= max; i++) {
      if (!usedIds.has(i)) {
        availableIds.push(i);
      }
    }

    if (availableIds.length === 0) {
      throw new Error('Исчерпаны все доступные id в заданном диапазоне');
    }

    const randomIndex: number = getRandomNumber(0, availableIds.length - 1);
    const randomId: number = availableIds[randomIndex];

    usedIds.add(randomId);

    return randomId;
  };
}

export { getRandomNumber, getRandomElement, createUniqueIdGenerator };
