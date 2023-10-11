enum Default {
  maxLength = 140,
}

/**
 * @description Функция для проверки длины строки.
 * @param inputString - Входная строка для проверки.
 * @param maxLength - Максимальная длина (по умолчанию - 140).
 * @returns {boolean} - Возвращает true, если строка не превышает максимальную длину, иначе false.
 */
const checkStringLength = (
  inputString: string,
  maxLength: number = Default.maxLength
): boolean => inputString.length <= maxLength;

/**
 * @description Функция для проверки, является ли строка палиндромом.
 * @param inputString - Входная строка для проверки.
 * @returns {boolean} - Возвращает true, если строка является палиндромом, иначе false.
 */
const isPalindrome = (inputString: string): boolean => {
  const cleanedString = inputString.toLowerCase().replace(/\s/g, '');
  return cleanedString === cleanedString.split('').reverse().join('');
};

/**
 * @description Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
 * @param input - Входная строка или число для извлечения цифр.
 * @returns {number} - Возвращает извлеченные цифры в виде целого положительного числа. Если цифр нет, возвращает NaN.
 */
const extractAndSumDigits = (input: string | number): number => {
  if (typeof input === 'number') {
    input = input.toString();
  }

  const digits = input.match(/\d/g);

  if (digits === null) {
    return NaN;
  }

  return parseInt(digits.join(''));
};

export { checkStringLength, isPalindrome, extractAndSumDigits };
