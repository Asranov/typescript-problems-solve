//Static Typing
let message: string = "Hello, TypeScript!";

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting: string = greet("Alice");

console.log(message);
console.log(greeting);

//Type Annotations
let age: number = 25;
let name2: string = "Alice";
let isStudent: boolean = true;

function add(x: number, y: number): number {
  return x + y;
}

let person: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};

let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

//Interfaces
interface Person {
  name: string;
  age: number;
  greet(): void;
}

class Student implements Person {
  name: string;
  age: number;
  studentId: string;

  constructor(name: string, age: number, studentId: string) {
    this.name = name;
    this.age = age;
    this.studentId = studentId;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`);
  }
}

const alice: Person = new Student("Alice", 25, "S12345");
alice.greet();  // Output: Hello, my name is Alice, and I'm 25 years old.

//Classes
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`);
  }
}

const alice1: Person = new Person("Alice", 25);
alice.greet();  // Output: Hello, my name is Alice, and I'm 25 years old.


//Generics
function printArray<T>(arr: T[]): void {
  for (let item of arr) {
    console.log(item)
  }
}

const numbers1: number[] = [1, 2, 3, 4, 5];
const names1: string[] = ["Alice", "Bob", "Charlie"];

printArray(numbers1);  // Output: 1 2 3 4 5
printArray(numbers1);    // Output: Alice Bob Charlie


//Modules and Namespaces
export function addFunc(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

namespace Geometry {
  export function calculateArea(width: number, height: number): number {
    return width * height;
  }
}

console.log(Geometry.calculateArea(5, 3));  // Output: 15


//Type Inference

let name = "Alice";
let age2 = 25;

function add2(a: number, b: number) {
  return a + b;
}

const result = add2(5, 7);

//
interface User {
  id: number,
  name: string,
  age: number
}

const user: User[] = [
  { id: 1, name: "Hayes", age: 20 },
  { id: 2, name: "Stiv", age: 12 },
  { id: 3, name: "Alice", age: 33 },
  { id: 4, name: "Lee", age: 22 },
]

interface Point {
  x: number,
  y: number
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`)
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

//Palindrome Check
function isPalindrome(str: string): boolean {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

//FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

//Factorial Calculation
function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1


//Find Maximum Element
function findMax(arr: number[]): number {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([5, 2, 9, 1, 5, 6])); // 9


//Array Reversal
function reverseArray(arr: any[]): void {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}


//GENERICS

//ex: 1
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

const stringArray: string[] = ["apple", "banana", "cherry"];
const numberArray: number[] = [1, 2, 3];
const result1 = getFirstElement(stringArray);
const result2 = getFirstElement(numberArray);

console.log(result1);
console.log(result2);


//Task 1: Identity Function
const identity = <T>(arg: T): T => arg;


//Task 2: Array Reversal
const reversedArray = <T>(arr: T[]): T[] => [...arr].reverse();

//Task 3: Filter Array
function filterArray<T>(array: T[], filterFn: (item: T) => boolean): T[] {
  return array.filter(filterFn);
}

//Task 4: Key-Value Pair
class KeyValuePair<K, V> {
  private key: K;
  private value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  getKey(): K {
    return this.key;
  }

  setKey(key: K): void {
    this.key = key;
  }

  getValue(): V {
    return this.value;
  }

  setValue(value: V): void {
    this.value = value;
  }
}

//Task 5: Tuple to Array Conversion
function tupleToArray<T extends any[]>(...tuple: T): T {
  return tuple
}

//Task 6:  Array Length Checker
function isArrayLength<T>(arr: T[], lenght: number): boolean {
  return arr.length == lenght
}


//Task 7: Value Swapper
function swapValues<T>(a: T, b: T): [T, T] {
  return [b, a];
}

//Task 8: Array Filter Map
function filterAndMap<T, U>(
  array: T[],
  filterFn: (item: T) => boolean,
  mapFn: (item: T) => U
): U[] {
  const filteredArray = array.filter(filterFn);
  const mappedArray = filteredArray.map(mapFn);
  return mappedArray;
}

//Task 9: Array Shift
function shiftArray<T>(arr: T[]): T | undefined {
  return arr.shift()
}

//Task 10:Array Concatenation
function concatenateArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2)
}

//Task 11: Remove Undefined
function removeUndefined<T>(arr: (T | undefined)[]): T[] {
  return arr.filter((item) => item !== undefined) as T[];
}

//Task 12:Linked List Node
class ListNode<T> {
  constructor(public value: T, public next: ListNode<T> | null = null) { }
}


//Task 13:Identity Class
class Identity<T> {
  constructor(private value: T) { }

  getValue(): T {
    return this.value
  }
}

//Task 14: Pair Class
class Pair<T, U> {
  constructor(public first: T, public second: U) { }
}

//Task 1: Find the Sum of Even Numbers
function sumOfEvenNumbers(numbers: number[]): number {
  return numbers.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}

//Task 2: Reverse a String
function reverseString(input: string): string {
  return input.split('').reverse().join('');
}
