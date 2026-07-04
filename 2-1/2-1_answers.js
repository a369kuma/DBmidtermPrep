// ========================================
// ANSWER VERSION
// ========================================


// ========================================
// 1. Rewrite using a ternary
// ========================================

const score = 72;

let label = score >= 50 ? "pass" : "fail";

console.log("Label:", label);
// pass


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

for (const subject in grades) {
  console.log(`${subject}: ${grades[subject]}`);
}

// Output:
// math: 85
// english: 72
// history: 91
// physics: 68


// b) Compute the average grade.

let total = 0;
let count = 0;

for (const subject in grades) {
  total += grades[subject];
  count++;
}

const average = total / count;

console.log("Average:", average);
// 79


// c) Build an array of subjects where the grade is >= 75.

const highGradeSubjects = [];

for (const subject in grades) {
  if (grades[subject] >= 75) {
    highGradeSubjects.push(subject);
  }
}

console.log("Subjects with grade >= 75:", highGradeSubjects);
// ["math", "history"]


// ========================================
// 3. Error handling practice
// ========================================

function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers.");
  }

  if (b === 0) {
    throw new RangeError("Cannot divide by zero.");
  }

  return a / b;
}

// Valid test
try {
  const result = divide(10, 2);
  console.log("Division result:", result);
} catch (error) {
  console.log(error.name + ":", error.message);
}

// TypeError test
try {
  const result = divide("10", 2);
  console.log("Division result:", result);
} catch (error) {
  console.log(error.name + ":", error.message);
}

// RangeError test
try {
  const result = divide(10, 0);
  console.log("Division result:", result);
} catch (error) {
  console.log(error.name + ":", error.message);
}


// ========================================
// 4. Class inheritance practice
// ========================================

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return "Some animal sound.";
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} says woof!`;
  }
}

const myDog = new Dog("Buddy");

console.log(myDog.speak());
// Buddy says woof!


// ========================================
// 5. Function with any number of arguments
// ========================================

function makeRow(...cells) {
  return `| ${cells.join(" | ")} |`;
}

console.log(makeRow("x", "y", "z"));
// | x | y | z |