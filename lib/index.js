const prompt = require('prompt-sync')({sigint: true});
const dp = require('./determinePrimes.js');

/* Return an ordered list of all prime numbers in a given range, inclusive of the endpoints
Allow the user to specify the number range via the command line
Handle inverse ranges such that 1-10 and 10-1 are equivalent
Add a test for the range 7900 and 7920 (valid primes are 7901, 7907, 7919)
Prime numbers = divisible by 1 and itself */

var lowerBound = prompt('Enter a lower bound: ');
var upperBound = prompt('Enter an upper bound: ');

lowerBound = Number(lowerBound);
upperBound = Number(upperBound);

dp.findPrimes(lowerBound, upperBound);