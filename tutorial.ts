// Typescript Types
// TypeScript has several built-in types, including:

// number
// string
// boolean
// any
// void
// null and undefined
// never
// object
// symbol
// Enumerated types (enum)
// Tuple types
// Array types
// Union types
// Intersection types
// Type aliases
// Type assertions

const typeScriptTypes = () => {

  //1. Primitive types

  //boolean type
  let isTrue: boolean = true;
  let isFalse: boolean = false;

  //number type
  let intValue: number = 42;
  let floatValue: number = 12.3;

  //string type
  let name: string = 'John Doe';


  //void type
  function noop(): void {
    return
  }

  //undefined and null type
  function doSomething(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log('Hello, ' + x.toUpperCase());
    }
  }


  //2. Object types

  //interface type
  interface Person {
    name: string;
    age: number;
  }

  function greet(person: Person) {
    return "Hello, " + person.name
  }

  //Class type
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    drive() {
      console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
    }
  }

  //Enum type
  enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }

  //arrays type
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  //typle type
  type StringNumberPair = [string, number]
  const pair: StringNumberPair = ["string", 0]

  const firts = pair[0]
  const second = pair[1]


  //3. Other types

  //any type
  let obj: any = {}

  //object type
  function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }

  printCoord({ x: 3, y: 7 });

  //unknown type
  function f1(a: any) {
    a.b(); // OK
  }

  function f2(a: unknown) {
    // Error: Property 'b' does not exist on type 'unknown'.
    // a.b();
  }


  //never type
  // Function returning never must not have a reachable end point
  function error(message: string): never {
    throw new Error(message);
  }

  // Inferred return type is never
  function fail() {
    return error('Something failed');
  }

  // Function returning never must not have a reachable end point
  function infiniteLoop(): never {
    while (true) { }
  }

  //as const 
  const colors = ['red', 'green', 'blue'] as const;

  //as [type]
  let num = 20
  // let str = num as string

  //as any
  let anyValue: any = 20
  anyValue = "13"
  anyValue = false

}

typeScriptTypes()


const typeCompbine = () => {
  //Union types
  function combine(input1: string | number, input2: string | number) {
    // return input1 + input2;
  }

  //intersection types
  // type typeAB = typeA & typeB;

  //aliaces types
  type Name = string;
  type Age = number;
  type User = { name: Name; age: Age };

  const user: User = { name: 'John', age: 30 };

  //key of operators
  interface User2 {
    name: string;
    age: number;
    location: string;
  }

  type UserKeys = keyof User2; // "name" | "age" | "location"
  const key: UserKeys = 'name';

}

const typeGuards = () => {
  //typeof
  let value: string | number = 'hello';

  if (typeof value === 'string') {
    console.log('value is a string');
  } else {
    console.log('value is a number');
  }

  //intence
  class Bird {
    fly() {
      console.log('flying...');
    }
    layEggs() {
      console.log('laying eggs...');
    }
  }

  const pet = new Bird();

  // instanceof
  if (pet instanceof Bird) {
    pet.fly();
  } else {
    console.log('pet is not a bird');
  }

  //Equality
  function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      x.toUpperCase();
      y.toLowerCase();
    } else {
      console.log(x);
      console.log(y);
    }
  }

  //truthiness
  function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }

    return "Nobody's here. :(";
  }

  //type Predicates
  function isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  function examplee(x: unknown) {
    if (isString(x)) {
      // We can now call any 'string' method on 'x'.
      x.toUpperCase();
    } else {
      console.log(x);
    }
  }
}

const typeScriptFunc = () => {
  //typing function
  function add(a: number, b: number): number {
    return a + b;
  }

  //overloading function
  function add1(a: number, b: number): number;
  function add1(a: string, b: string): string;

  function add1(a: any, b: any): any {
    return a + b;
  }

  console.log(add(1, 2)); // 3
  // console.log(add('Hello', ' World'));
}