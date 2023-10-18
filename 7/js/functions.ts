enum myDefault {
  maxLength = 140,
}

/**
 * @description Функция для проверки длины строки.
 * @param inputString - Входная строка для проверки.
 * @param maxLength - Максимальная длина (по умолчанию - 140).
 * @returns - Возвращает true, если строка не превышает максимальную длину, иначе false.
 */
const checkStringLength = (
  inputString: string,
  maxLength: number = myDefault.maxLength
): boolean => inputString.length <= maxLength;

/**
 * @description Функция для проверки, является ли строка палиндромом.
 * @param inputString - Входная строка для проверки.
 * @returns - Возвращает true, если строка является палиндромом, иначе false.
 */
const isPalindrome = (inputString: string): boolean => {
  const cleanedString = inputString.toLowerCase().replace(/\s/g, '');
  return cleanedString === cleanedString.split('').reverse().join('');
};

/**
 * @description Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
 * @param input - Входная строка или число для извлечения цифр.
 * @returns - Возвращает извлеченные цифры в виде целого положительного числа. Если цифр нет, возвращает NaN.
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

/**
 * Проверяет, укладывается ли встреча в рамки рабочего дня.
 * @param startWorkDay - Время начала рабочего дня в формате 'часы:минуты'.
 * @param endWorkDay - Время конца рабочего дня в формате 'часы:минуты'.
 * @param startMeeting - Время начала встречи в формате 'часы:минуты'.
 * @param meetingDuration - Продолжительность встречи в минутах.
 * @returns - Возвращает true, если встреча укладывается в рамки рабочего дня, иначе false.
 */
function isMeetingWithinWorkingHours(
  startWorkDay: string,
  endWorkDay: string,
  startMeeting: string,
  meetingDuration: number
): boolean {
  const parseTime = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes; // Преобразование времени в минуты
  };

  const startWorkMinutes: number = parseTime(startWorkDay);
  const endWorkMinutes: number = parseTime(endWorkDay);
  const startMeetingMinutes: number = parseTime(startMeeting);
  const endMeetingMinutes: number = startMeetingMinutes + meetingDuration;

  // Добавлено условие для проверки продолжительности встречи
  return (
    startMeetingMinutes >= startWorkMinutes &&
    endMeetingMinutes <= endWorkMinutes &&
    meetingDuration > 0
  );
}

export {
  checkStringLength,
  isPalindrome,
  extractAndSumDigits,
  isMeetingWithinWorkingHours,
};
