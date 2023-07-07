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


