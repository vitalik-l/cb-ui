import { BET_TYPES } from '../constants';

const getBetNumbersCache: { [key: string]: any } = {};

const NUMBERS = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
];
const RED_NUMBERS = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

const checkStartNum = (allowedNumbers: Array<number>, startNumber: number) => {
  if (allowedNumbers.indexOf(startNumber) === -1)
    throw new Error(
      `startNum ${startNumber} is out of allowed numbers ${JSON.stringify(allowedNumbers)}`,
    );
};

export const getBetNumbers = ({
  betType,
  startNumber,
  typeBSide,
}: {
  betType: string;
  startNumber: number;
  typeBSide?: number;
}) => {
  const cacheId = `${betType}${startNumber}${typeBSide}`;

  if (getBetNumbersCache[cacheId]) return getBetNumbersCache[cacheId];

  let allowedStartNumbers,
    numbers: Array<number> = [];

  switch (betType) {
    case BET_TYPES.STRAIGHT:
      numbers = [startNumber];
      break;

    case BET_TYPES.SPLIT:
      if (typeof typeBSide === undefined)
        throw new Error('Bet type SPLIT must contain typeBSide param');
      typeBSide = Number(typeBSide);
      if (![1, 3, 0].some((n) => n === typeBSide))
        throw new Error(
          `typeBSide ${typeBSide} is out of allowed numbers ${JSON.stringify([1, 3, 0])}`,
        );
      // split bets on zero and first line (1, 2, 3)
      if (typeBSide === 0 && ![1, 2, 3].some((n) => n === startNumber))
        throw new Error(
          `startNumber ${startNumber} is out of allowed numbers ${JSON.stringify([1, 2, 3])}`,
        );
      let secondNumber = startNumber + typeBSide;
      if (typeBSide === 0) {
        // split bets on zero and first line (1, 2, 3)
        secondNumber = startNumber;
        startNumber = 0;
      }
      if (secondNumber > 36)
        throw new Error(
          `Invalid second number for a split bet with startNumber=${startNumber} and typeBSide=${typeBSide}`,
        );
      numbers = [startNumber, secondNumber];
      break;

    case BET_TYPES.STREET:
      allowedStartNumbers = NUMBERS.filter((n) => n % 3 === 1);
      checkStartNum(allowedStartNumbers, startNumber);
      for (let i = 0; i < 3; i++) {
        numbers.push(startNumber + i);
      }
      break;

    case BET_TYPES.CORNER:
      allowedStartNumbers = NUMBERS.filter((n) => n % 3 !== 0);
      checkStartNum(allowedStartNumbers, startNumber);
      for (let i = 0; i <= 4; i++) {
        if (i !== 2) numbers.push(startNumber + i);
      }
      break;

    case BET_TYPES.BASKET:
      // always the same, no startNumber needed
      numbers = [0, 1, 2, 3];
      break;

    case BET_TYPES.LINE:
      allowedStartNumbers = NUMBERS.filter((n) => n % 3 === 1).slice(0, -1);
      checkStartNum(allowedStartNumbers, startNumber);
      for (let i = 0; i <= 5; i++) {
        numbers.push(startNumber + i);
      }
      break;

    case BET_TYPES.COLUMN:
      allowedStartNumbers = [1, 2, 3];
      checkStartNum(allowedStartNumbers, startNumber);
      let rem = startNumber === 3 ? 0 : startNumber;
      numbers = NUMBERS.filter((n) => n % 3 === rem);
      break;

    case BET_TYPES.DOZEN:
      allowedStartNumbers = [1, 13, 25];
      checkStartNum(allowedStartNumbers, startNumber);
      numbers = NUMBERS.filter((n) => n >= startNumber && n < startNumber + 12);
      break;

    case BET_TYPES.REDBLACK:
      allowedStartNumbers = [1, 2];
      checkStartNum(allowedStartNumbers, startNumber);
      /*redNumbers = NUMBERS.filter(n => {
       if (n < 11) {
       return n & 1 ? 1 : 0;
       } else if (n < 19) {
       return n & 1 ? 0 : 1;
       } else if (n < 29) {
       return n & 1 ? 1 : 0;
       } else {
       return n & 1 ? 0 : 1;
       }
       }),*/
      let blackNumbers = NUMBERS.filter((n) => RED_NUMBERS.indexOf(n) < 0);
      numbers = startNumber === 1 ? RED_NUMBERS : blackNumbers;
      break;

    case BET_TYPES.ODDEVEN:
      if (startNumber % 2 === 0) {
        numbers = NUMBERS.filter((n) => n && n % 2 === 0);
      } else {
        numbers = NUMBERS.filter((n) => n % 2 === 1);
      }
      break;

    case BET_TYPES.LOWHIGH:
      if (startNumber < 19) {
        numbers = NUMBERS.filter((n) => n && n < 19);
      } else {
        numbers = NUMBERS.filter((n) => n >= 19);
      }
      break;
  }

  getBetNumbersCache[cacheId] = numbers;
  return numbers;
};
