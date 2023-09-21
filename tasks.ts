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
