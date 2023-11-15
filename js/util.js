const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomElement = (array) => array[getRandomNumber(0, array.length - 1)];

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

export { getRandomNumber, getRandomElement, createUniqueIdGenerator };
