export const isPrime = n => Array.from({length: Math.floor(Math.sqrt(n))}, (_, i) => i + 2).reduce((acc, curr) => n % curr ? true : acc, false);

// recursive Ackermann won't work for m > 3 && n > 0 case, unfortunatel
export const Ackermann = (m, n) => {
	if (m === 0) return n + 1;
  if (m > 0 && n === 0) 
  	return Ackermann(m - 1, 1);
  if (m > 0 && n > 0)
  	return Ackermann(m - 1, Ackermann(m, n-1));
}
