const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomElement = (items) => items[getRandomNumber(0, items.length - 1)];

const createUniqueIdGenerator = (min, max) => {
  const usedIds = new Set();

  if (min > max) {
    throw new Error('Некорректный диапазон чисел');
  }

  return () => {
    if (usedIds.size >= max - min + 1) {
      throw new Error('Исчерпаны все доступные id в заданном диапазоне');
    }

    let randomId = getRandomNumber(min, max);

    while (usedIds.has(randomId)) {
      randomId = getRandomNumber(min, max);
    }

    usedIds.add(randomId);

    return randomId;
  };
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();

    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

export {
  getRandomNumber,
  getRandomElement,
  createUniqueIdGenerator,
  debounce,
  throttle,
};
