// ========================================
// PRACTICE VERSION
// Fill in the TODO sections yourself
// ========================================


// ========================================
// 1. Rewrite using a ternary
// ========================================

const score = 72;

let label;

// Original if/else:
//
// if (score >= 50) {
//   label = "pass";
// } else {
//   label = "fail";
// }

// TODO: rewrite the if/else above using a ternary
// label = ...

console.log("Label:", label);


// ========================================
// 2. Object + loop practice
// ========================================

const grades = {
  math: 85,
  english: 72,
  history: 91,
  physics: 68
};

// a) Print each subject and its grade.
// Example output:
// math: 85
// english: 72

// TODO: write a loop that prints each subject and grade





// b) Compute the average grade.

let total = 0;
let count = 0;

// TODO: loop through the grades object and update total and count





const average = null; // TODO: replace null with total / count

console.log("Average:", average);


// c) Build an array of subjects where the grade is >= 75.

const highGradeSubjects = [];

// TODO: loop through the grades object
// TODO: if the grade is >= 75, push the subject into highGradeSubjects





console.log("Subjects with grade >= 75:", highGradeSubjects);


// ========================================
// 3. Error handling practice
// ========================================

// Write a function divide(a, b).
// It should:
// - throw a TypeError if either argument is not a number
// - throw a RangeError if b is zero
// - otherwise return a / b

function divide(a, b) {
  // TODO: check if a or b is not a number

  // TODO: check if b is zero

  // TODO: return a / b
}

// Test it using try/catch.

try {
  // TODO: call divide with valid numbers
  const result = null;

  console.log("Division result:", result);
} catch (error) {
  console.log(error.name + ":", error.message);
}

try {
  // TODO: call divide with a non-number
  const result = null;

  console.log("Division result:", result);
} catch (error) {
  console.log(error.name + ":", error.message);
}

try {
  // TODO: call divide with b as 0
  const result = null;

  console.log("Division result:", result);
} catch (error) {
  console.log(error.name + ":", error.message);
}


// ========================================
// 4. Class inheritance practice
// ========================================

// Define a class Animal.
// It should have:
// - a constructor(name)
// - a speak() method that returns "Some animal sound."

class Animal {
  // TODO: write constructor

  // TODO: write speak method
}

// Define a class Dog that extends Animal.
// It should override speak().
// Dog's speak method should return:
// `${this.name} says woof!`

class Dog extends Animal {
  // TODO: override speak method
}

// TODO: create a Dog instance

const myDog = null;

// TODO: call speak() and print the result

console.log(myDog);


// ========================================
// 5. Function with any number of arguments
// ========================================

// Write a function makeRow(...cells).
// It should take any number of arguments and return a string like:
// "| a | b | c |"
//
// Test it with:
// makeRow("x", "y", "z")

function makeRow(...cells) {
  // TODO: return the formatted string
}

console.log(makeRow("x", "y", "z"));