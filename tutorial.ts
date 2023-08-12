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
  //boolean types
  let isTrue: boolean = true
  let isFalse: boolean = false

  //number types
  let intValue: number = 42
  let floatValue: number = 12.3

  //string types
  let name: string = 'John Doe';


  //void types
  function noop(): void {
    return
  }

  //undefined and null types
  function doSomething(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log('Hello, ' + x.toUpperCase());
    }
  }

}