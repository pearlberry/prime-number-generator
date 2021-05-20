const { expect } = require('@jest/globals');
const { isPrime, findPrimes } = require('../lib/determinePrimes');


  test('1 is a prime number', () => {
    expect(isPrime(1)).toBe(true);
  });

  test('2 is a prime number', () => {
    expect(isPrime(2)).toBe(true);
  });

  test('4 is not a prime number', () => {
    expect(isPrime(4)).toBe(false);
  });

  test('expected prime numbers are returned for user specified ranges', () => {
    const arr1 = [7901,7907,7919]
    const arr2 = [2,3,5,7,11,13,17,19]

    expect(findPrimes(7900,7920)).toEqual(arr1);
    expect(findPrimes(0,20)).toEqual(arr2);
  });

  test('expected prime numbers are returned for user specified ranges when lower bound > upper bound', () => {
    const arr1 = [9851,9857,9859,9871,9883,9887,9901,9907,9923,9929,9931,9941,9949,9967,9973]
    const arr2 = [2,3,5,7]

    expect(findPrimes(10000, 9850)).toEqual(arr1);
    expect(findPrimes(10,1)).toEqual(arr2);
  });

  test('negative numbers not allowed', () => {
    expect(() => {
      findPrimes(-20,-40)
    }).toThrow(Error);
  });

  test('user must enter a range of numbers', () => {
    expect(() => {
      findPrimes(20,20)
    }).toThrow(Error);
  });

  test('user cannot enter non-numerical values', () => {
    expect(() => {
      findPrimes('hi',20)
    }).toThrow(Error);
  });

  test('negative numbers are not returned', () => {
    const arr = [2,3,5,7]
    expect(findPrimes(-10, 9)).toEqual(arr);
  });

  test('0 and 1 are not prime numbers', () => {
    const arr = [2,3,5,7]
    expect(findPrimes(0, 10)).toEqual(arr);
  });