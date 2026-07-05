// ========================================
// ANSWER VERSION
// ========================================


// ========================================
// 1. JSX render prediction
// ========================================

const name = "Jane";

const user = {
  age: 21
};

function RenderPredictionAnswer() {
  return (
    <div>
      <p>{name}</p>
      {/* Renders: Jane */}

      <p>{5 * 5}</p>
      {/* Renders: 25 */}

      <p>{user.age}</p>
      {/* Renders: 21 */}

      <p>{name.toUpperCase()}</p>
      {/* Renders: JANE */}

      <p>name</p>
      {/* Renders: name */}
    </div>
  );
}

// Explanation:
// Anything inside curly braces {} is treated as JavaScript.
// So {name} uses the variable value, which is "Jane".
// But <p>name</p> is plain text, so React literally renders "name".


// ========================================
// 2. Convert HTML to valid JSX
// ========================================

function EmailCardAnswer() {
  return (
    <div className="card">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
    </div>
  );
}

// The three fixes are:
// class becomes className
// for becomes htmlFor
// input must be self-closing with />


// ========================================
// 3. Render a list using map
// ========================================

const students = [
  { id: 101, name: "Ada", program: "Software" },
  { id: 102, name: "Linus", program: "Systems" },
  { id: 103, name: "Grace", program: "Data" },
];

function StudentListAnswer() {
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

// Shorter version:

function StudentListShortAnswer() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} - {student.program}
        </li>
      ))}
    </ul>
  );
}


// ========================================
// 4. React keys explanation
// ========================================

const keyExplanation = `
Using key={index} can confuse React when items are inserted, deleted, or reordered,
because the index changes even though the actual item may be different.
They should use a stable unique id from the data, like key={student.id}.
`;

console.log(keyExplanation);


// ========================================
// 5. Component tree practice
// ========================================

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

// Component tree:
//
// App
// ├── Header
// └── Content
//     ├── Article
//     └── Sidebar
//
// Root component:
// App
//
// Siblings:
// Header and Content are siblings.
// Article and Sidebar are siblings.
//
// Leaves:
// Header, Article, and Sidebar are leaves because they do not render other custom components.