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
