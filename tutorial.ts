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
  let isTrue: boolean = true
  let isFalse: boolean = false

  //number type
  let intValue: number = 42
  let floatValue: number = 12.3

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
}