export const isPrime = n => Array.from({length: Math.floor(Math.sqrt(n))}, (_, i) => i + 2).reduce((acc, curr) => n % curr ? true : acc, false);
