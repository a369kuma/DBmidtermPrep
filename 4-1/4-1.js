// ========================================
// PRACTICE VERSION
// Fill in the TODO sections yourself
// ========================================

import React from "react";


// ========================================
// 1. Controlled input practice
// ========================================

// This input is uncontrolled:
//
// <input id="name" type="text" onChange={props.onNameChange} />
//
// The parent already passes:
// - a name value
// - an onNameChange handler
//
// TODO:
// Add the one missing attribute that makes this input controlled.

function NameInputPractice(props) {
  return (
    <input
      id="name"
      type="text"
      value = {props.name}
      onChange={props.onNameChange}
    />
  );
}


// ========================================
// 2. useEffect timing practice
// ========================================

// For each effect, say exactly when it runs and how many times.

function UseEffectTimingPractice({ query }) {
  React.useEffect(() => {
    // Effect A
    // TODO:
    // When does this run? After every render
    // How many times? after first render and every re-render
  });

  React.useEffect(() => {
    // Effect B
    // TODO:
    // When does this run? one after first render
    // How many times? does not re-ren after updates
  }, []);

  React.useEffect(() => {
    // Effect C
    // TODO:
    // When does this run? after first render and when query changes
    // How many times? whenever query changes
  }, [query]);

  return <p>Check the comments for your answers.</p>;
}


// ========================================
// 3. useEffect browser title practice
// ========================================

// Write a useEffect that sets the browser tab title to:
//
// "You have N unread"
//
// where N is the unread count.
//
// It should run whenever unread changes,
// but NOT on unrelated re-renders.

function UnreadTitlePractice({ unread }) {
  // TODO: write the useEffect here
  React.useEffect(() => {
    document.title = `You have ${unread} unread`;
  }, [unread]);

  return <p>Unread: {unread}</p>;
}


// ========================================
// 4. Adjacent JSX elements practice
// ========================================

// This component fails:
//
// const Greeting = () => {
//   return (
//     <h1>Welcome</h1>
//     <p>Glad you're here</p>
//   );
// };
//
// Error:
// Adjacent JSX elements must be wrapped in an enclosing tag.
//
// TODO:
// Fix it WITHOUT adding a div.
// Hint: use a Fragment.

const GreetingPractice = () => {
  return (
    // TODO: wrap these without adding an extra DOM node
    <React.Fragment>
      {/* TODO: put the h1 here */}
      <h1>Welcome</h1>
      <p>Glad you're here</p>
      {/* TODO: put the p here */}

    </React.Fragment>
  );
};


// ========================================
// 5. Render-or-nothing with &&
// ========================================

// Rewrite this ternary using &&:
//
// {count > 0 ? <p>{count} items</p> : null}
//
// TODO:
// Complete the component below.

function ItemCountPractice({ count }) {
  return (
    <div>
      {count > 0 && <p>{count} items</p>}
    </div>
  );
}

// TODO:
// In one sentence, explain when you would prefer && over a ternary.

const conditionalRenderingExplanation = `
TODO: Write your explanation here.
&& is used when you only want to render something or nothing
use ternary when you need to choose between two diff outputs
`;

console.log(conditionalRenderingExplanation);


// ========================================
// Optional App for testing
// ========================================

function App() {
  const [name, setName] = React.useState("");
  const [unread, setUnread] = React.useState(3);
  const [count, setCount] = React.useState(2);
  const [query, setQuery] = React.useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Lecture 5.1 Practice</h1>

      <h2>Controlled Input</h2>
      <NameInputPractice
        name={name}
        onNameChange={handleNameChange}
      />

      <h2>useEffect Timing</h2>
      <UseEffectTimingPractice query={query} />

      <button onClick={() => setQuery(query + "!")}>
        Change Query
      </button>

      <h2>Unread Title</h2>
      <UnreadTitlePractice unread={unread} />

      <button onClick={() => setUnread(unread + 1)}>
        Add Unread
      </button>

      <h2>Fragment</h2>
      <GreetingPractice />

      <h2>Conditional Rendering</h2>
      <ItemCountPractice count={count} />

      <button onClick={() => setCount(count + 1)}>
        Add Item
      </button>
    </div>
  );
}

export default App;