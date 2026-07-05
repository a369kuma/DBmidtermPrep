import React from "react";

// ========================================
// PRACTICE VERSION
// Fill in the TODO sections yourself
// ========================================


// ========================================
// 1. JSX render prediction
// ========================================

// Assume these are defined above the component:

const name = "Jane";

const user = {
  age: 21
};

function RenderPredictionPractice() {
  return (
    <div>
      {/* Predict what each line renders to the screen. */}

      <p>{name}</p>
      {/* Prediction: Jane */}

      <p>{5 * 5}</p>
      {/* Prediction: 25*/}

      <p>{user.age}</p>
      {/* Prediction: 21*/}

      <p>{name.toUpperCase()}</p>
      {/* Prediction: JANE*/}

      <p>name</p>
      {/* Prediction: name*/}

      {/* TODO:
          The last one is a trick.
          What is different about <p>name</p> compared to <p>{name}</p>?
      */}
    </div>
  );
}


// ========================================
// 2. Convert HTML to valid JSX
// ========================================

// Original HTML:
//
// <div class="card">
//   <label for="email">Email</label>
//   <input id="email" type="email">
// </div>
//
// There are three things to fix:
// 1. class should become ______
// 2. for should become ______
// 3. input should be ______

function EmailCardAnswer() {
  return (
    <div className="card">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
    </div>
  );
}

// ========================================
// 3. Render a list using map
// ========================================

const students = [
    { id: 101, name: "Ada", program: "Software" },
    { id: 102, name: "Linus", program: "Systems" },
    { id: 103, name: "Grace", program: "Data" },
  ];
  
  function StudentListPractice() {
    return (
      <ul>
        {students.map((student) => {
          return (
            <li key={student.id}>
              {student.name} - {student.program}
            </li>
          );
        })}
      </ul>
    );
  }
  
  function App() {
    return (
      <div>
        <StudentListPractice />
      </div>
    );
  }
  
  export default App;


// ========================================
// 4. React keys explanation
// ========================================

// A classmate wrote:
//
// key={index}
//
// Their list glitches when items are deleted from the middle.
//
// TODO:
// In one or two sentences, explain:
// - What is going wrong?
// - What should they use instead?

const keyExplanation = `
TODO: Write your explanation here.
`;

console.log(keyExplanation);


// ========================================
// 5. Component tree practice
// ========================================

// Look at this app.
// Draw or describe the component tree.
// Label:
// - root component
// - siblings
// - leaves

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

function Header() {
  return <h1>My Site</h1>;
}

function Content() {
  return (
    <div>
      <Article />
      <Sidebar />
    </div>
  );
}

function Article() {
  return <p>...</p>;
}

function Sidebar() {
  return <aside>...</aside>;
}

// TODO:
// Describe the component tree here:
//
// Root:
//
// Children of App:
//
// Siblings:
//
// Leaves: