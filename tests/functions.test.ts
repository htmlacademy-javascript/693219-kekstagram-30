import { describe, expect, it } from 'vitest';
import {
  checkStringLength,
  isPalindrome,
  extractAndSumDigits,
  isMeetingWithinWorkingHours,
} from '../js/functions';

describe('Функция для проверки длины строки.', () => {
  const TEST_STRING = 'проверяемая строка';
  const { length } = TEST_STRING;

  it('Длина строки меньше второго аргумента', () =>
    expect(checkStringLength(TEST_STRING, length + 1)).toBe(true));
  it('Длина строки равна второму аргументу', () =>
    expect(checkStringLength(TEST_STRING, length)).toBe(true));
  it('Длина строки больше второго аргумента', () =>
    expect(checkStringLength(TEST_STRING, length - 1)).toBe(false));

  it('Вызов без второго аргумента', () =>
    expect(checkStringLength(TEST_STRING)).toBe(true));
  const veryLongString = TEST_STRING.repeat(100);
  it('Вызов без второго аргумента очень длинной строки', () =>
    expect(checkStringLength(veryLongString)).toBe(false));
});

describe('Функция для проверки, является ли строка палиндромом.', () => {
  it('Строка является палиндромом', () =>
    expect(isPalindrome('топот')).toBe(true));
  it('Палиндром с разным регистром', () =>
    expect(isPalindrome('ДовОд')).toBe(true));
  it('Не палиндром', () => expect(isPalindrome('Кекс')).toBe(false));
  it('Палиндром с пробелами', () =>
    expect(isPalindrome('Лёша на полке клопа нашёл ')).toBe(true));
});

describe('Функция для извлечения цифр из строки.', () => {
  it('Строка содержит цифры в начале', () =>
    expect(extractAndSumDigits('2023 год')).toBe(2023));
  it('Строка содержит цифры в конце', () =>
    expect(extractAndSumDigits('ECMAScript 2022')).toBe(2022));
  it('Строка содержит цифры в разных местах, нужно конкетинировать', () =>
    expect(extractAndSumDigits('1 кефир, 0.5 батона')).toBe(105));
  it('Строка содержит цифры с нулями впереди. Нужно опустить нули, преобразив в число.', () =>
    expect(extractAndSumDigits('агент 007')).toBe(7));
  it('Строка не содержит цифр', () =>
    expect(extractAndSumDigits('а я томат')).toBeNaN());
  it('Число вернет число', () => expect(extractAndSumDigits(2023)).toBe(2023));
  it('Дробное число', () => expect(extractAndSumDigits(1.5)).toBe(15));
  it('Отрицательное число', () => expect(extractAndSumDigits(-1)).toBe(1));
});

describe('isMeetingWithinWorkingHours', () => {
  it('должна возвращать true, если встреча укладывается в рабочее время', () => {
    expect(isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90)).toBe(
      true
    );
    expect(isMeetingWithinWorkingHours('8:0', '10:0', '8:0', 120)).toBe(true);
  });

  it('должна возвращать false, если встреча выходит за рабочее время', () => {
    expect(isMeetingWithinWorkingHours('08:00', '14:30', '14:00', 90)).toBe(
      false
    );
    expect(isMeetingWithinWorkingHours('14:00', '17:30', '08:0', 90)).toBe(
      false
    );
    expect(isMeetingWithinWorkingHours('8:00', '17:30', '08:00', 900)).toBe(
      false
    );
  });

  // Дополнительные тесты с другими значениями
  it('должна возвращать true для других рабочих часов и времени встречи', () => {
    expect(isMeetingWithinWorkingHours('09:00', '18:00', '12:30', 120)).toBe(
      true
    );
  });

  it('должна возвращать false, если встреча начинается до начала рабочего времени', () => {
    expect(isMeetingWithinWorkingHours('09:00', '18:00', '08:30', 60)).toBe(
      false
    );
  });

  it('должна возвращать false, если продолжительность встречи равна 0', () => {
    expect(isMeetingWithinWorkingHours('09:00', '18:00', '12:00', 0)).toBe(
      false
    );
  });
});
