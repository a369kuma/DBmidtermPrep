// ========================================
// ANSWER VERSION
// ========================================


// ========================================
// 1. Express params, body, and query practice
// ========================================

// Route 1:
//
// app.get("/api/recipes/:id", (req, res) => res.json(req.params.id));
//
// Method:
// GET
//
// Example URL:
// /api/recipes/7
//
// Server sends back:
// "7"
//
// Data comes from:
// req.params.id
//
// req.params stores route parameters from the URL path.
// In this route, :id is the route parameter.


// Route 2:
//
// app.post("/api/recipes", (req, res) => res.json(req.body));
//
// Method:
// POST
//
// Example request body:
// {
//   "title": "Toast",
//   "ingredients": ["bread"],
//   "instructions": "Toast it"
// }
//
// Server sends back:
// The same body object.
//
// Data comes from:
// req.body


const paramsQueryBodyExplanation = `
req.params comes from named route pieces in the URL path, like /api/recipes/:id.
req.query comes from the query string after ?, like /api/recipes?search=toast.
req.body comes from the request body, usually sent with POST, PUT, or PATCH.
`;

console.log(paramsQueryBodyExplanation);


// ========================================
// 2. Express "Cannot set headers after they are sent" practice
// ========================================

const express = require("express");
const app = express();

app.use(express.json());

const recipes = [];

app.post("/api/recipes", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "title required" });
  }

  recipes.push({ title });

  return res.status(201).json({ title });
});

// What was wrong:
//
// The broken code sends a 400 response if title is missing,
// but then keeps running and tries to send a second response with status 201.
// Express cannot send two responses for one request.
// The fix is to return after the error response.


// ========================================
// 3. Fix Promise pending in React fetch
// ========================================

// Broken:
//
// const loadRecipes = () => {
//   const data = fetch("/api/recipes").json();
//   console.log(data);
// };
//
// Problem:
// fetch(...) returns a Promise.
// Also, .json() must be called on the response object,
// not directly on the Promise from fetch.

const loadRecipesAnswer = async () => {
  const response = await fetch("/api/recipes");

  const data = await response.json();

  console.log(data);
};


// Also valid with .then:

const loadRecipesThenAnswer = () => {
  fetch("/api/recipes")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};


// ========================================
// 4. POST fetch practice
// ========================================

const recipeData = {
  title: "Toast",
  ingredients: ["bread"],
  instructions: "Toast it"
};

const createRecipeAnswer = async () => {
  const response = await fetch("/api/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recipeData)
  });

  const data = await response.json();

  console.log(data);
};


// ========================================
// 5. Form handleChange practice
// ========================================

import React from "react";

function FormAnswer() {
  const [formData, setFormData] = React.useState({
    title: "",
    calories: "",
    instructions: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

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

// Slightly safer version when new state depends on old state:

function FormBetterAnswer() {
  const [formData, setFormData] = React.useState({
    title: "",
    calories: "",
    instructions: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value
    }));
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

export default FormAnswer;