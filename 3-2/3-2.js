// ========================================
// PRACTICE VERSION
// Fill in the TODO sections yourself
// ========================================

import { useState } from "react";


// ========================================
// 1. Handler wiring
// ========================================

// Question:
// What's wrong with this handler wiring?
//
// <button onClick={handleClick()}>Save</button>
//
// TODO:
// Explain what is wrong:
//
// TODO:
// Write the fixed version below:

function SaveButtonPractice() {
  const handleClick = () => {
    console.log("Saved!");
  };

  return (
    <button onClick = {handleClick}>
      Save
    </button>
  );
}


// ========================================
// 2. Props practice
// ========================================

// A parent renders:
//
// <Greeting name="Jane" />
//
// Write the Greeting component as an arrow function.
// It should render:
//
// <p>Hello, Jane!</p>
//
// The name should come from props.

const GreetingPractice = (props) => {
  // TODO: read name from props
  return <p>Hello, {props.name}</p>;
}

function PropsPracticeApp() {
  return (
    <div>
      <GreetingPractice name="Jane" />
    </div>
  );
}


// ========================================
// 3. useState counter practice
// ========================================

// This broken version does NOT work correctly:
//
// const Counter = () => {
//   let count = 0;
//
//   const handleClick = () => {
//     count = count + 1;
//   };
//
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>+1</button>
//     </div>
//   );
// };
//
// TODO:
// Identify the bug: Every render would reset the count back to zero.
//
// TODO:
// Rewrite it correctly using useState.

const CounterPractice = () => {
  // TODO: create count state
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // TODO: update count state
    setCount((count + 1))
  };

  return (
    <div>
      <p>Count: {/* TODO: show count */ count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};


// ========================================
// 4. Lifting state explanation
// ========================================

// You have:
// - App owns searchTerm state
// - Search contains the <input>
// - List displays only matching items
//
// TODO:
// In your own words, describe the path a single keystroke takes.
//
// Include these names:
// - searchTerm
// - setSearchTerm
// - Search
// - List
// - onSearch
// - filtered list

const liftingStateExplanation = `
TODO: Write your explanation here.
App owns the searchTerm state and passes through the current value to search, along with a
handler like onSearch that calls setSearchTerm. When the user types in the search input,
search calls onSearch with the new app and updates searchTerm, re-renders and creates a
filtered list from the items and passes that list down to List to display.
`;

console.log(liftingStateExplanation);


// ========================================
// 5. Filter expression practice
// ========================================

// Given this array in App:

const textbooks = [
  { title: "The Road to React", author: "Wieruch, R.", year: "2021" },
  { title: "Learning Node.js", author: "Wandschneider, Marc", year: "2017" },
];

// Write the filter expression that keeps only books published
// in or after 2020.
//
// Watch the type of year.
// year is currently a string, not a number.

const recentTextbooks = textbooks.filter((book) => {
    return Number(book.year) >= 2020;
});

// TODO: replace null with textbooks.filter(...)

console.log(recentTextbooks);


// ========================================
// Optional App to render practice components
// ========================================

function App() {
  return (
    <div>
      <h1>React Practice</h1>

      <h2>Save Button</h2>
      <SaveButtonPractice />

      <h2>Props</h2>
      <PropsPracticeApp />

      <h2>Counter</h2>
      <CounterPractice />
    </div>
  );
}

export default App;