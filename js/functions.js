// eslint-disable-next-line
function checkStringLength(inputString, maxLength) {
  // Проверка длины строки
  return inputString.length <= maxLength;
}

// eslint-disable-next-line
function isPalindrome(inputString) {
  // Преобразование строки к нижнему регистру и удаление пробелов
  const cleanedString = inputString.toLowerCase().replace(/\s/g, '');

  // Сравнение строки с ее обратным вариантом
  return cleanedString === cleanedString.split('').reverse().join('');
}

// eslint-disable-next-line
function extractAndSumDigits(input) {
  // Если input - число, возвращаем его
  if (typeof input === 'number') {
    return input;
  }

  // Проверка, является ли input строкой
  if (typeof input !== 'string') {
    return NaN;
  }

  let result = 0;

  // Перебор каждого символа в строке
  for (let i = 0; i < input.length; i++) {
    const digit = parseInt(input[i], 10);

    // Проверка, является ли текущий символ цифрой
    if (!isNaN(digit)) {
      result = result * 10 + digit;
    }
  }

  // Проверка наличия результата и его положительности
  return result === 0 ? NaN : Math.abs(result);
}
