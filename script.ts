// TypeScript logical tasks with solution

import { Interface } from "readline";
import { number } from "yargs";

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

//2.Find the factorial of a given number.
function factorial(number: number): number {
  if (number === 0 || number === 1) {
    return 1
  }

  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i
  }

  return result
}

//3.Reverse a given string.
const reverseStr = (str: string): string => {
  return str.split("").reverse().join("")
}

//4.Determine if a given string is a palindrome.
const isStrPalindrome = (str: string): boolean => {
  const reverseStr = str.split("").reverse().join("")
  return str.toLocaleLowerCase() == reverseStr.toLocaleLowerCase()
}

//5.Find the largest num in an array.
const largestNum = (nums: number[]): number => {
  let largest = nums[0]

  for (let i = 0; i < nums.length; i++) {
    if (largest < nums[i]) {
      largest = nums[i]
    }
  }

  return largest
}

//6.Find the second largest num in an array.
const secondLargestNum = (nums: number[]): number => {
  const sortedNumber = nums.sort((a, b) => b - a)
  return sortedNumber[1]
}

//7.Check if two strings are anagrams.
const areAnagrams = (str1: string, str2: string): boolean => {
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
};

//8.Count the number of occurrences of a specific character in a string.
const countOccurrences = (str: string, char: string): number => {
  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      count++
    }
  }

  return count
}

//9.Remove duplicates from an array.
const removeDuplicates = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};

//10.Check if an array is sorted in ascending order.
const isSortedAscending = (arr: number[]): boolean => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

//11.Calculate the sum of all numbers in an array.
const calculateSum = (numbers: number[]): number => {
  let sum = 0

  numbers.forEach((number) => {
    sum += number
  })

  return sum
}

//12.Find the average of numbers in an array.
const calculateAverage = (arr: number[]): number => {
  if (arr.length === 0) {
    return 0; // Return 0 for an empty array
  }

  const sum = arr.reduce((total, num) => total + num, 0);
  const average = sum / arr.length;

  return average;
};

//13.Remove all falsy values from an array.
const removeFalsy = (arr: boolean[]): boolean[] => {
  return arr.filter(Boolean);
};

//14.Find the longest word in a sentence.
const longestWord = (str: string): string => {
  const words = str.split(" ")
  let word = ""

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > word.length) {
      word = words[i]
    }
  }

  return word
}

//15.Convert a string to title case.
const convertToTitleCase = (str: string): string => {
  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(" ");
};

//16.Merge two sorted arrays into a single sorted array.
const singleSortedArray = (arr1: any[], arr2: any): any[] => {
  const singleArr = arr1.concat(arr2)

  return singleArr.sort((a, b) => a - b)
}

//17.Calculate the Fibonacci series up to a given number of terms.
const fibonacciSeries = (numTerms: number): number[] => {
  const series: number[] = [];

  if (numTerms >= 1) {
    series.push(0);
  }

  if (numTerms >= 2) {
    series.push(1);
  }

  for (let i = 2; i < numTerms; i++) {
    const nextNum = series[i - 1] + series[i - 2];
    series.push(nextNum);
  }

  return series;
};

//18.Check if a given number is a power of 2.
const isPowerOfTwo = (num: number): boolean => {
  if (num < 1) {
    return false;
  }

  let power = 0;
  let current = 1;

  while (current < num) {
    current *= 2;
    power++;
  }

  return current === num;
};

//19.Calculate the square root of a given number.
const squareRootNumber = (number: number): number => {
  return Math.sqrt(number)
}

//20.Check if a given number is an Armstrong number.
const findArmstrongNumbers = (start: number, end: number): number[] => {
  const armstrongNumbers: number[] = [];

  for (let num = start; num <= end; num++) {
    const digits = num.toString().split('');
    const numDigits = digits.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(digits[i]);
      sum += Math.pow(digit, numDigits);
    }

    if (sum === num) {
      armstrongNumbers.push(num);
    }
  }

  return armstrongNumbers;
};

//21.Find the GCD (Greatest Common Divisor) of two numbers.
function calculateGCD(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);

  if (b === 0) {
    return a;
  }

  return calculateGCD(b, a % b);
}

//22.Find the LCM (Least Common Multiple) of two numbers.
function calculateLCM(a: number, b: number): number {
  const gcd = calculateGCD(a, b);

  const lcm = (a * b) / gcd;

  return lcm;
}

//23.Generate all possible permutations of a given string.
function generatePermutations(input: string): string[] {
  const permutations: string[] = [];
  const stack: [string, string][] = [[input, ""]];

  while (stack.length > 0) {
    const [remaining, current] = stack.pop()!;

    if (remaining.length === 0) {
      permutations.push(current);
      continue;
    }

    for (let i = remaining.length - 1; i >= 0; i--) {
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      stack.push([newRemaining, current + remaining[i]]);
    }
  }

  return permutations;
}

//24.Check if a given string is a valid email address.
const checkEmail = (email: string): boolean => {
  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailCheck.test(email);
}

//25.Find the median of an array of numbers.
const findMedian = (numbers: number[]): number => {
  const sortedNumbers = numbers.sort((a, b) => a - b)
  const length = sortedNumbers.length
  const middleIndex = Math.floor(length / 2)

  if (length == 0) {
    return 0
  }

  if (length % 2 == 0) {
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2
  } else {
    return sortedNumbers[middleIndex]
  }
}


//26.Check if a string contains only digits
const checkDigit = (str: string): boolean => {
  for (let i = 0; i < str.length; i++) {
    if (isNaN(Number(str[i]))) {
      return false;
    }
  }
  return true;
};

//27.Count the number of vowels in a string.
const countVowels = (str: string): number => {
  let count = 0
  const vowels = ["a", "o", "e", "i", "u"]

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLocaleLowerCase())) {
      count++
    }
  }

  return count
}


//Interactive Task Validator
interface Task {
  description: string;
  answer: string | number | boolean;
}

const solveTask = (task: Task): void => {
  console.log(task.description);

  const userAnswer = prompt("Enter your answer:");

  if (userAnswer == task.answer) {
    console.log("Correct answer!");
  } else {
    console.log("Incorrect answer.");
  }
};

