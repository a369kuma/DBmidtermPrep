// ========================================
// ANSWER VERSION
// ========================================

import React from "react";


// ========================================
// 1. Dismiss button handler bug
// ========================================

// Wrong:
//
// <button type="button" onClick={onRemoveItem(item)}>Dismiss</button>
//
// Problem:
// onRemoveItem(item) runs immediately during render.
// React needs a function to call later when the button is clicked.
//
// Fixed:
// Wrap it in an arrow function.

function DismissButtonAnswer({ item, onRemoveItem }) {
  return (
    <button
      type="button"
      onClick={() => onRemoveItem(item)}
    >
      Dismiss
    </button>
  );
}


// ========================================
// 2. Add recipe without mutating array
// ========================================

const initialRecipes = [
  { recipeID: 1, title: "Fruit Salad" },
  { recipeID: 2, title: "Avocado Wrap" },
];

function AddRecipeAnswer() {
  const [recipes, setRecipes] = React.useState(initialRecipes);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div>
      <button
        onClick={() =>
          handleAddRecipe({
            recipeID: 3,
            title: "Pasta"
          })
        }
      >
        Add Recipe
      </button>

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.recipeID}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Also valid and often safer:
//
// const handleAddRecipe = (newRecipe) => {
//   setRecipes((previousRecipes) => [...previousRecipes, newRecipe]);
// };


// ========================================
// 3. Delete recipe without mutating array
// ========================================

// Broken code:
//
// const handleRemove = (id) => {
//   const i = recipes.findIndex((r) => r.recipeID === id);
//   recipes.splice(i, 1);
//   setRecipes(recipes);
// };
//
// Problem:
// splice mutates the existing recipes array.
// Then setRecipes(recipes) passes React the same array reference,
// so React may not detect a real state change.
//
// Correct:
// Use filter to create a new array.

function RemoveRecipeAnswer() {
  const [recipes, setRecipes] = React.useState(initialRecipes);

  const handleRemove = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.recipeID !== id));
  };

  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.recipeID}>
            {recipe.title}
            <button
              type="button"
              onClick={() => handleRemove(recipe.recipeID)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Also valid and often safer:
//
// const handleRemove = (id) => {
//   setRecipes((previousRecipes) =>
//     previousRecipes.filter((recipe) => recipe.recipeID !== id)
//   );
// };


// ========================================
// 4. Convert .then/.catch to async/await
// ========================================

function getAsyncRecipes() {
  return Promise.resolve({
    data: {
      recipes: [
        { recipeID: 1, title: "Fruit Salad" },
        { recipeID: 2, title: "Avocado Wrap" },
      ],
    },
  });
}

async function loadRecipesAnswer() {
  try {
    const result = await getAsyncRecipes();

    console.log(result.data.recipes.length);
  } catch (err) {
    console.error(err);
  }
}

loadRecipesAnswer();


// ========================================
// 5. useEffect dependency array explanation
// ========================================

const dependencyArrayExplanation = `
If the useEffect has no dependency array, it runs after every render.
For data loading, that can cause repeated fetching, and if the effect
 updates state,
it can accidentally create a render-fetch-render loop.
Using [] is the right choice when you only want to load 
the data once after the component first renders.
`;

console.log(dependencyArrayExplanation);


// ========================================
// Optional App for testing
// ========================================

function App() {
  const sampleItem = {
    recipeID: 1,
    title: "Fruit Salad"
  };

  const handleRemoveItem = (item) => {
    console.log("Remove:", item);
  };

  return (
    <div>
      <h1>React Practice</h1>

      <h2>Dismiss Button</h2>
      <DismissButtonAnswer
        item={sampleItem}
        onRemoveItem={handleRemoveItem}
      />

      <h2>Add Recipe</h2>
      <AddRecipeAnswer />

      <h2>Remove Recipe</h2>
      <RemoveRecipeAnswer />
    </div>
  );
}

export default App;