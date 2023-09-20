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
  return arg
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
