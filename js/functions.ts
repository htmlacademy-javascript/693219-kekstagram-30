enum Default {
  maxLength = 140,
}

/**
 * @description Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее
 * @param inputString
 * @param maxLength
 * @returns boolean
 */
const checkStringLength = function (
  inputString: string,
  maxLength: number = Default.maxLength
) {
  return inputString.length <= maxLength;
};

/**
 * @description Функция для проверки, является ли строка палиндромом.
 * @param inputString
 * @returns
 */
function isPalindrome(inputString: string) {
  const cleanedString = inputString.toLowerCase().replace(/\s/g, '');

  return cleanedString === cleanedString.split('').reverse().join('');
}

/**
 * @description Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
 * @param input
 * @returns
 */
function extractAndSumDigits(input: string | number) {
  if (typeof input === 'number') {
    input = input.toString();
  }

  let digits = input.match(/\d/g);

  if (digits === null) {
    return NaN;
  }

  return parseInt(digits.join(''));
}

export { checkStringLength, isPalindrome, extractAndSumDigits };
