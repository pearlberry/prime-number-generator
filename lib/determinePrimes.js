// Determine if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Add primes to prime number array within the user-specified range
function findPrimes(lowerBound, upperBound) {
    var primeArray = [];
    if (lowerBound < 0 && upperBound < 0) { throw new Error('Please use positive numbers.'); }
    else if (isNaN(lowerBound) || isNaN(upperBound)) { throw new Error('Please use numbers.'); }
    else if (lowerBound === upperBound) { throw new Error('Please use a valid range.'); }
    else {
        if (lowerBound > upperBound) {
            [lowerBound, upperBound] = [upperBound, lowerBound];
        }
        for (var i = lowerBound; i <= upperBound; i++) {
            if (isPrime(i)) {
                primeArray.push(i);
            }
        }
        console.log(`The prime numbers between ${lowerBound} and ${upperBound} are: ` + primeArray);
        return primeArray;
    }
}

module.exports = {
    isPrime,
    findPrimes,
}