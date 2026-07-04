// 1. Predict the output before running

console.log(typeof null);      // "object"
console.log(typeof []);        // "object"
console.log(0 == "");          // true
console.log(0 === "");         // false
console.log([] == false);      // true
console.log(NaN === NaN);      // false


// 2. Given:

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// Sum of all numbers using forEach and an accumulator
let sum = 0;

numbers.forEach((num) => {
  sum += num;
});

console.log("Sum:", sum); // 36


// A new array containing only the numbers greater than 3
const greaterThanThree = numbers.filter((num) => {
  return num > 3;
});

console.log("Numbers greater than 3:", greaterThanThree);
// [4, 5, 9, 6, 5]


// A new array where every number has been multiplied by 10
const multipliedByTen = numbers.map((num) => {
  return num * 10;
});

console.log("Multiplied by 10:", multipliedByTen);
// [30, 10, 40, 10, 50, 90, 20, 60, 50]


// The numbers greater than 3, multiplied by 10
const greaterThanThreeTimesTen = numbers
  .filter((num) => {
    return num > 3;
  })
  .map((num) => {
    return num * 10;
  });

console.log("Greater than 3, multiplied by 10:", greaterThanThreeTimesTen);
// [40, 50, 90, 60, 50]


// 3. Build an object representing a student

const student = {
  name: "Adarsh",
  program: "Management Engineering",
  year: 2
};

console.log("Original student:", student);


// Add a new property: email
student.email = "adk2k6@gmail.com";

console.log("Student with email:", student);


// Use Object.keys to list its property names
const propertyNames = Object.keys(student);

console.log("Property names:", propertyNames);
// ["name", "program", "year", "email"]


// Convert it to a JSON string
const studentJSON = JSON.stringify(student);

console.log("JSON string:", studentJSON);


// Convert it back to an object
const studentBack = JSON.parse(studentJSON);

console.log("Converted back to object:", studentBack);


// Verify the round-trip gives the same data
console.log("Same data?", JSON.stringify(student) === JSON.stringify(studentBack));
// true


// 4. Function with default parameter and template literal

function greet(name = "Olga", salutation = "Hello") {
  return `${salutation}, ${name}!`;
}

// Passing one argument
console.log(greet("Olga"));
// Hello, Olga!

// Passing two arguments
console.log(greet("Olga", "Hi"));
// Hi, Olga!

// Passing zero arguments
console.log(greet());
// Hello, Olga!


// 5. Predict what this prints, then run it

const x = "outer";

function show() {
  const x = "inner";
  console.log(x);
}

show();          // inner
console.log(x);  // outer