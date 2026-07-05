// ========================================
// ANSWER VERSION
// ========================================

import React from "react";


// ========================================
// 1. Controlled input practice
// ========================================

// The missing attribute is value.
// An input is controlled when React state controls its value.

function NameInputAnswer(props) {
  return (
    <input
      id="name"
      type="text"
      value={props.name}
      onChange={props.onNameChange}
    />
  );
}


// ========================================
// 2. useEffect timing practice
// ========================================

function UseEffectTimingAnswer({ query }) {
  React.useEffect(() => {
    console.log("Effect A");
  });

  // Effect A:
  // Runs after every render.
  // It runs after the first render and after every re-render.

  React.useEffect(() => {
    console.log("Effect B");
  }, []);

  // Effect B:
  // Runs only once after the first render.
  // The empty dependency array means it does not re-run after updates.

  React.useEffect(() => {
    console.log("Effect C");
  }, [query]);

  // Effect C:
  // Runs after the first render and whenever query changes.
  // It does not run for unrelated re-renders where query stays the same.

  return <p>Open the console to see the effects.</p>;
}


// ========================================
// 3. useEffect browser title practice
// ========================================

function UnreadTitleAnswer({ unread }) {
  React.useEffect(() => {
    document.title = `You have ${unread} unread`;
  }, [unread]);

  return <p>Unread: {unread}</p>;
}

// Explanation:
// [unread] tells React to run the effect after the first render
// and whenever unread changes.


// ========================================
// 4. Adjacent JSX elements practice
// ========================================

const GreetingAnswer = () => {
  return (
    <>
      <h1>Welcome</h1>
      <p>Glad you're here</p>
    </>
  );
};

// You can also write React.Fragment:
//
// const GreetingAnswer = () => {
//   return (
//     <React.Fragment>
//       <h1>Welcome</h1>
//       <p>Glad you're here</p>
//     </React.Fragment>
//   );
// };


// ========================================
// 5. Render-or-nothing with &&
// ========================================

// Original:
//
// {count > 0 ? <p>{count} items</p> : null}
//
// Rewritten with &&:
//
// {count > 0 && <p>{count} items</p>}

function ItemCountAnswer({ count }) {
  return (
    <div>
      {count > 0 && <p>{count} items</p>}
    </div>
  );
}

const conditionalRenderingExplanation = `
Use && when you only want to render something or render nothing;
use a ternary when you need to choose between two different outputs.
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
      <NameInputAnswer
        name={name}
        onNameChange={handleNameChange}
      />

      <p>Name: {name}</p>

      <h2>useEffect Timing</h2>
      <UseEffectTimingAnswer query={query} />

      <button onClick={() => setQuery(query + "!")}>
        Change Query
      </button>

      <h2>Unread Title</h2>
      <UnreadTitleAnswer unread={unread} />

      <button onClick={() => setUnread(unread + 1)}>
        Add Unread
      </button>

      <h2>Fragment</h2>
      <GreetingAnswer />

      <h2>Conditional Rendering</h2>
      <ItemCountAnswer count={count} />

      <button onClick={() => setCount(count + 1)}>
        Add Item
      </button>
    </div>
  );
}

export default App;