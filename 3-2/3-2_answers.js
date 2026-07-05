// ========================================
// ANSWER VERSION
// ========================================

import { useState } from "react";


// ========================================
// 1. Handler wiring
// ========================================

// Wrong:
//
// <button onClick={handleClick()}>Save</button>
//
// Problem:
// handleClick() runs immediately during render.
// React needs a function reference to run later when the button is clicked.
//
// Fixed:
//
// <button onClick={handleClick}>Save</button>

function SaveButtonAnswer() {
  const handleClick = () => {
    console.log("Saved!");
  };

  return (
    <button onClick={handleClick}>
      Save
    </button>
  );
}


// ========================================
// 2. Props practice
// ========================================

const GreetingAnswer = (props) => {
  return <p>Hello, {props.name}!</p>;
};

function PropsAnswerApp() {
  return (
    <div>
      <GreetingAnswer name="Jane" />
    </div>
  );
}

// Destructured version:

const GreetingDestructuredAnswer = ({ name }) => {
  return <p>Hello, {name}!</p>;
};


// ========================================
// 3. useState counter practice
// ========================================

// Bug in the original:
// let count = 0 is a normal local variable.
// Updating it does not tell React to re-render.
// Also, every render would reset count back to 0.
//
// Correct version:

const CounterAnswer = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

// Also valid, and often better when the new state depends on old state:

const CounterBetterAnswer = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};


// ========================================
// 4. Lifting state explanation
// ========================================

const liftingStateExplanation = `
App owns the searchTerm state and passes the current value to Search,
along with a handler like onSearch that calls setSearchTerm.
When the user types in the Search input, Search calls onSearch with the new value.
App updates searchTerm, re-renders, creates a filtered list from the items,
and passes that filtered list down to List to display.
`;

console.log(liftingStateExplanation);


// ========================================
// 5. Filter expression practice
// ========================================

const textbooks = [
  { title: "The Road to React", author: "Wieruch, R.", year: "2021" },
  { title: "Learning Node.js", author: "Wandschneider, Marc", year: "2017" },
];

const recentTextbooks = textbooks.filter((book) => {
  return Number(book.year) >= 2020;
});

console.log(recentTextbooks);

// Output:
// [
//   { title: "The Road to React", author: "Wieruch, R.", year: "2021" }
// ]

// Shorter version:

const recentTextbooksShort = textbooks.filter(
  (book) => Number(book.year) >= 2020
);

console.log(recentTextbooksShort);


// ========================================
// Optional App to render answer components
// ========================================

function App() {
  return (
    <div>
      <h1>React Practice</h1>

      <h2>Save Button</h2>
      <SaveButtonAnswer />

      <h2>Props</h2>
      <PropsAnswerApp />
      <GreetingDestructuredAnswer name="Jane" />

      <h2>Counter</h2>
      <CounterAnswer />
      <CounterBetterAnswer />
    </div>
  );
}

export default App;