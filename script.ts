// 50 TypeScript logical tasks

//1.Write a function to check if a given number is prime.

function isPrime(number: number): boolean {
  if (number <= 1) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false
    }
  }

  return true
}