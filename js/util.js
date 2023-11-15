/**
 * Генерация случайного числа в заданном диапазоне
 * @param min
 * @param max
 * @returns
 */
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Возвращает случайный элемент из массива.
 * @param Исходный массив.
 * @returns Случайная элемент из массива.
 */
const getRandomElement = (array) => array[getRandomNumber(0, array.length - 1)];

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
function createUniqueIdGenerator(min, max) {
  const usedIds = new Set();

  if (min > max) {
    throw new Error("Некорректный диапазон чисел");
  }

  return () => {
    if (usedIds.size >= max - min + 1) {
      throw new Error("Исчерпаны все доступные id в заданном диапазоне");
    }

    let randomId = getRandomNumber(min, max);

    while (usedIds.has(randomId)) {
      randomId = getRandomNumber(min, max);
    }

    usedIds.add(randomId);

    return randomId;
  };
}

const getElement = (selector, target = document) => {
  const element = target.querySelector(selector);
  if (!element) {
    throw new Error(
      `Element with selector '${selector}' not found target ${target}`
    );
  }
  return element;
};

export {
  getRandomNumber,
  getRandomElement,
  createUniqueIdGenerator,
  getElement,
};
