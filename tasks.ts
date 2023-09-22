//TypeScript interview-questions and answers
//https://www.turing.com/interview-questions/typescript

//  1.Explain TypeScript and its use ?
// TypeScript is an open - source programming language developed and maintained by Microsoft,
//  which acts as a statically - typed superset of JavaScript.

// 2.Can you tell the names of some of the built-in types in TypeScript?
// In TypeScript, there are several built-in types available for developers to ensure safer,
//  more accurate code. Some of the most common built-in types include:
//  any, boolean, number, string, null, undefined, void etc.

// 3.Give an example of generics in TypeScript?
// Generics in TypeScript allow for creating reusable and flexible components without compromising on type safety. 
function identify<T>(arg: T): T {
  return arg;
}

// 4.Tell me about Modules in TypeScript.
// In TypeScript (TS), modules are a way to organize and encapsulate code into reusable units.
// TypeScript supports different module systems, including CommonJS, ES6 modules, and AMD.
// I'll provide examples of both CommonJS and ES6 modules.

// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}


// 5.Why can TypeScript be chosen over JavaScript?
// TypeScript can be chosen over JavaScript for several reasons,
// depending on your specific project requirements and development goals.

// 6.Do TypeScript files need compilation?
// Yes, TypeScript files (.ts) need to be compiled into JavaScript files (.js) before they can be executed in a JavaScript runtime environment.
// TypeScript is a superset of JavaScript that introduces static typing and additional language features.
// Since browsers and Node.js understand JavaScript, not TypeScript, you need to transpile TypeScript into JavaScript to run it.

// 7.List some benefits of TypeScript?
// TypeScript offers several benefits over plain JavaScript, making it a popular choice for many software development projects.
// Here are some of the key advantages of TypeScript:
// Static Typing, Enhanced Tooling, Code Readability, Refactoring Support,Error Detection, ECMAScript Compatibility, Module System, Popular Frameworks and Libraries and etc...

// 8. In TypeScript, can we call the base class constructor from the child class ?
class Animal {
  constructor(public name: string) { }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  bark() {
    console.log(`${this.name} barks`);
  }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.makeSound();
myDog.bark();

// 9.What is the difference between TypeScript and a statically typed language?
// TypeScript is optionally statically typed, which means you can tell the compiler to ignore a variable's type.
// We can assign any type of value to the variable using any data type.
// During compilation, TypeScript will not perform any error checking.

let dynamicVariable: any;

dynamicVariable = 5;
console.log(dynamicVariable);

dynamicVariable = "Hello";
console.log(dynamicVariable);

dynamicVariable = true;
console.log(dynamicVariable);

const array: any[] = [1, "two", true];
console.log(array);

// 10.Is string interpolation possible in TypeScript?
// Yes, string interpolation is possible in TypeScript.
// TypeScript supports string template literals, which allow you to embed expressions within strings using template placeholders ${ }.

const name = "Alice";
const age = 30;
const message = `Hello, my name is ${name} and I am ${age} years old.`;


// 11.How do the extensions .ts and .tsx differ in TypeScript?
// In TypeScript, the extensions .ts and .tsx are used to distinguish between regular TypeScript files and TypeScript files that include JSX (JavaScript XML) syntax. JSX is often associated with React, a popular JavaScript library for building user interfaces.
// .ts
// Files with the .ts extension are regular TypeScript files.
// They contain TypeScript code without JSX syntax.
// You typically use .ts for non-React projects or for TypeScript code that doesn't involve rendering user interfaces with JSX.

function greet(name: string): string {
  return `Hello, ${name}!`;
}
const message1 = greet("Alice");

// .tsx (TypeScript with JSX Files):
// import React from 'react';

// function Greeting({ name }: { name: string }) {
//   return <div>Hello, {name}!</div>;
// }

// const App = () => {
//   return <Greeting name="Alice" />;
// };

// export default App;

// 12.Differentiate between Classes and Interfaces in TypeScript?
// Classes: It is denoted by class keyword
// Interfaces: It is denoted by interface keyword

// 13.Explain the Interface in TypeScript?
interface Person {
  name: string;
  age: number;
  sayHello(): void;
}

// 14.Explain Decorators in TypeScript.
// Decorators in TypeScript are a special kind of declarative syntax used to add metadata or modify the behavior of classes, methods, properties, or parameters.

// 15.When should you use interfaces or classes in TypeScript?
// In TypeScript, both interfaces and classes are used to define custom types and structures. However, you should choose between interfaces and classes based on your specific requirements:

// Use Interfaces when:

// You want to define the shape, structure, and contract for how an object or a class should look, without implementing its actual functionality.
// You want to enforce specific properties, methods, or their types on an object or a class.
// You need a lightweight approach that only focuses on the type-checking aspect during development.
// You want to describe the structure and requirements for function parameters.
// Use Classes when:

// You want to encapsulate methods and properties within a single entity, including providing a concrete implementation for them.
// You want to use object-oriented concepts like inheritance, abstraction, and encapsulation.
// You need to create instances of the class to interact with.
// You want to use instance-specific state and methods based on concrete implementations.

// 16.How can you use class constants in TypeScript?
class Circle {
  // Class constants
  static readonly PI: number = 3.14159;

  constructor(public radius: number) { }

  // Method to calculate the area of the circle
  calculateArea(): number {
    return Circle.PI * this.radius * this.radius;
  }
}

// 17.In TypeScript, what can you do to check null and undefined?
let myVar: string | null | undefined = null;

if (myVar == null) {
  console.log("myVar is null or undefined");
}

if (myVar === null) {
  console.log("myVar is null");
}

if (myVar === undefined) {
  console.log("myVar is undefined");
}

// 18.Are all object-oriented principles supported by TypeScript?
// Yes, it supports the OOP principles 

// 19.Also, tell me some OOP terms supported by TypeScript.
class Person {
  constructor(public name: string) { }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}


// 20.Explain Getters/Setters in TypeScript.
class Circle2 {
  private _radius: number = 0;

  get radius(): number {
    return this._radius;
  }

  set radius(newRadius: number) {
    if (newRadius >= 0) {
      this._radius = newRadius;
    } else {
      console.error("Radius cannot be negative.");
    }
  }
}

// 21.Can TypeScript be used on the back-end and how
// Yes, TypeScript can be used on the back-end for server-side development, just like JavaScript.
// One popular approach for using TypeScript on the back-end is with Node.js.

// 22.Explain TypeScript Map file
// A TypeScript Map file, also known as a Source Map, is a JSON file generated during the compilation process of TypeScript to JavaScript.

// 23.Can you explain the difference between String and string in TypeScript?
// In TypeScript, String and string both represent textual data, but they have different meanings and use cases:
// string: This is the simplest, preferred, and most commonly used type for representing textual data in TypeScript.
// let text: string = 'Hello, TypeScript!';
// String: This is a built-in global object of JavaScript and wraps around the simple string type to provide additional methods and functionalities.
// let wrappedText: String = new String('Wrapped TypeScript!');

// 24.Explain Type Erasure in TypeScript?
// Type erasure is a concept related to TypeScript's type system and how it behaves at runtime.

// 25.How can you create an enum with string values?
enum Direction {
  North = 'NORTH',
  South = 'SOUTH',
  East = 'EAST',
  West = 'WEST',
}

// 26.List some features of TypeScript.
// TypeScript brings several powerful features to JavaScript development, which help in creating safer, more maintainable, and scalable code.

// 27.Tell me the Components of TypeScript?
// TypeScript is a statically typed superset of JavaScript that brings additional features and enhancements to the language.
// Syntax, Type Annotations, Interfaces, Classes, Enums, Generics, Type Inference, Type Aliases etc...

// 28.How will you install TypeScript?
// To install TypeScript, you need to have Node.js and npm (Node Package Manager) installed on your machine. With Node.js and npm installed, you can follow these steps to install TypeScript:
// Open up your terminal or command prompt.
// Run the following command to install TypeScript globally:
// npm install -g typescript
// This command will install the latest version of TypeScript as a global package, making it available on your entire system for use in multiple projects. The -g flag ensures that the package is installed globally.
// After the installation is complete, you can check the installed version of TypeScript by running:
// tsc --version
// This command will display the TypeScript version on your system, confirming that the installation was successful.
// Now, you have TypeScript installed and ready to use. To compile a TypeScript file, you can use the tsc command followed by the filename, like this:
// tsc myFile.ts
// This command will compile your TypeScript file (myFile.ts) into a JavaScript file with the same name (myFile.js).

// 30.Explain Variables in TypeScript and how to create them?
// In TypeScript, variables are memory locations that store values of various data types. To declare and initialize a variable in TypeScript, you use the let or const keyword followed by the variable name, an optional type annotation, and the assignment operator (=) to provide an initial value.

// 31.List the ways you can declare a variable?
// 4 ways examples below:
// var [identifier]: [type-annotation] = value / Here we declare type and value in a single statement
// var [identifier]: [type-annotation] / Here we declare type without value
// var [identifier] = value / Here we declare value without type
// var [identifier] / Here we declare without value and type

// 32.Can we compile .ts automatically with real-time changes in the .ts file?
// Yes, you can automatically compile a TypeScript file (.ts) whenever there are real-time changes by using the TypeScript compiler's --watch option.
// tsc --watch your-file.ts
