// ========================================
// PRACTICE VERSION
// Fill in the TODO sections yourself
// ========================================


// ========================================
// 1. Express params, body, and query practice
// ========================================

// For each line, say:
// - What does the server send back?
// - Which HTTP method is used?
// - Where does the data come from?

// Route 1:
//
// app.get("/api/recipes/:id", (req, res) => res.json(req.params.id));
//
// TODO: 
// Method: get
// Example URL: /api/recipes/:id
// Server sends back: 7
// Data comes from: req.params.id


// Route 2:
//
// app.post("/api/recipes", (req, res) => res.json(req.body));
//
// TODO:
// Method: Post
// Example request body: 
// {
//   "title": "Toast",
//   "ingredients": ["bread"],
//   "instructions": "Toast it"
// }
// Server sends back: body object
// Data comes from: req.body


// TODO:
// Explain the difference between:
//
// req.params
// req.query
// req.body

const paramsQueryBodyExplanation = `
TODO: Write your explanation here.
req.params comes from named rout pieces in the url path
req.query comes from query string
req.body comes from the request body
`;

console.log(paramsQueryBodyExplanation);


// ========================================
// 2. Express "Cannot set headers after they are sent" practice
// ========================================

// Broken route:
//
// app.post("/api/recipes", (req, res) => {
//   const { title } = req.body;
//
//   if (!title) {
//     res.status(400).json({ error: "title required" });
//   }
//
//   recipes.push({ title });
//   res.status(201).json({ title });
// });
//
// TODO:
// Explain what is wrong: code sends a 400 error if a title is missing, but then
// keeps running and tries to send a second a second response with 201

//
// TODO:
// Rewrite the route correctly.

const express = require("express");
const app = express();

app.use(express.json());

const recipes = [];

app.post("/api/recipes", (req, res) => {
  const { title } = req.body;

  // TODO:
  // If title is missing, send 400 and STOP the function.
  if (!title) {
    return res.status(400).json({error: "Title is required"});
  }


  recipes.p
  // TODO:
  // Otherwise, add recipe and send 201 response.
});


// ========================================
// 3. Fix Promise pending in React fetch
// ========================================

// Broken code:
//
// const loadRecipes = () => {
//   const data = fetch("/api/recipes").json();
//   console.log(data);
// };
//
// Problem:
// This logs Promise { <pending> } instead of the recipes.
//
// TODO:
// Fix it using async/await.

const loadRecipesPractice = async () => {
  // TODO:
  // await fetch("/api/recipes")
  const response = await fetch("/api/recipes");

  const data = await response.json();

  console.log(data);

  // TODO:
  // await response.json()

  // TODO:
  // console.log the actual data
};


// ========================================
// 4. POST fetch practice
// ========================================

// Write the fetch call that sends this object to POST /api/recipes.
// Include:
// - method
// - headers
// - body

const recipeData = {
  title: "Toast",
  ingredients: ["bread"],
  instructions: "Toast it"
};

// TODO:
// Write the fetch call.

const createRecipePractice = async () => {
    const response = await fetch("/api/recipes", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(recipeData)

    })

    const data = await response.json();
    console.log(data);
  // TODO:
  // const response = await fetch(...)

  // TODO:
  // const data = await response.json()

  // TODO:
  // console.log(data)
};


// ========================================
// 5. Form handleChange practice
// ========================================

// A form has three inputs:
//
// name="title"
// name="calories"
// name="instructions"
//
// All three inputs use one handleChange.
// Write handleChange so typing in any field updates only that field
// in a formData state object, leaving the others untouched.

function FormPractice() {
  const React = require("react");

  const [formData, setFormData] = React.useState({
    title: "",
    calories: "",
    instructions: ""
  });

  const handleChange = (event) => {
    // TODO:
    // Get name and value from event.target
    const {name,value} = event.target;

    // TODO:
    // Update only the changed field using computed property names
    // and preserve the other fields using spread.

    setFormData({
        ...formData,
        [name]: value
    });
  };

  return (
    <form>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />

      <input
        name="calories"
        value={formData.calories}
        onChange={handleChange}
        placeholder="Calories"
      />

      <input
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
        placeholder="Instructions"
      />
    </form>
  );
}