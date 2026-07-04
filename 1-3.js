// ===============================
// 1. Predict the output before running
// ===============================

// Write your predicted output beside each line before running.

console.log(typeof null);      // Your prediction: Object
console.log(typeof []);        // Your prediction: Object
console.log(0 == "");          // Your prediction: True
console.log(0 === "");         // Your prediction: False
console.log([] == false);      // Your prediction: True
console.log(NaN === NaN);      // Your prediction: False


// ===============================
// 2. map / filter / forEach practice
// ===============================

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// a) Use forEach to compute the sum of all numbers.
// Hint: create a variable outside the forEach and update it inside.

let sum = 0;

// TODO: use numbers.forEach here



console.log("Sum:", sum);


// b) Use filter to create a new array containing only numbers greater than 3.

const greaterThanThree = null;

// TODO: replace null with your filter expression



console.log("Numbers greater than 3:", greaterThanThree);


// c) Use map to create a new array where every number is multiplied by 10.

const multipliedByTen = null;

// TODO: replace null with your map expression



console.log("Multiplied by 10:", multipliedByTen);


// d) Chain filter and map.
// First keep only numbers greater than 3.
// Then multiply those numbers by 10.

const greaterThanThreeTimesTen = null;

// TODO: replace null with your chained filter + map expression



console.log("Greater than 3, multiplied by 10:", greaterThanThreeTimesTen);


// ===============================
// 3. Object practice
// ===============================

// a) Build an object representing a student.
// It should have these properties:
// - name
// - program
// - year

const student = {
  // TODO: add name
  // TODO: add program
  // TODO: add year
};

console.log("Original student:", student);


// b) Add a new property called email.


// TODO: add email to the student object



console.log("Student with email:", student);


// c) Use Object.keys to list the object's property names.

const propertyNames = null;

// TODO: replace null with Object.keys(...)



console.log("Property names:", propertyNames);


// d) Convert the student object to a JSON string.

const studentJSON = null;

// TODO: replace null with JSON.stringify(...)



console.log("JSON string:", studentJSON);


// e) Convert the JSON string back into an object.

const studentBack = null;

// TODO: replace null with JSON.parse(...)



console.log("Converted back to object:", studentBack);


// f) Verify that the round-trip gives you the same data.
// Hint: compare JSON.stringify(student) with JSON.stringify(studentBack).

const sameData = null;

// TODO: replace null with your comparison



console.log("Same data?", sameData);


// ===============================
// 4. Function practice
// ===============================

// Write a function called greet.
// It should take two parameters:
// - name
// - salutation
//
// salutation should default to "Hello".
//
// It should return a greeting using a template literal.
// Example:
// greet("Olga") should return "Hello, Olga!"

// TODO: write the greet function here




// Test it with one argument.
console.log(greet("Olga"));

// Test it with two arguments.
console.log(greet("Olga", "Hi"));

// Test it with zero arguments.
console.log(greet());


// ===============================
// 5. Scope practice
// ===============================

// Predict what this prints before running.

const x = "outer";

function show() {
  const x = "inner";
  console.log(x); // Your prediction:
}

show();

console.log(x); // Your prediction: