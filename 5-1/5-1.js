// ========================================
// PRACTICE VERSION
// Fill in the TODO sections yourself
// ========================================

import React from "react";


// ========================================
// 1. Dismiss button handler bug
// ========================================

// Question:
// Why does this break the app as soon as the component renders,
// before anyone clicks it?
//
// <button type="button" onClick={onRemoveItem(item)}>Dismiss</button>
//
// TODO:
// Explain what is wrong:
// onRemoveItem runs immediately during the render, and react needs a function to call later when the button is actually clicked.
// TODO:
// Write the fixed button below:

function DismissButtonPractice({ item, onRemoveItem }) {
  return (
    <button 
    type="button"
    onClick = {() => onRemoveItem(item)}
    >
      Dismiss
    </button>
  );
}


// ========================================
// 2. Add recipe without mutating array
// ========================================

// App holds:
//
// const [recipes, setRecipes] = React.useState(initialRecipes);
//
// Write a handleAddRecipe(newRecipe) function that appends newRecipe
// to the list WITHOUT mutating the existing array.
//
// Hint:
// Use the spread operator.

const initialRecipes = [
  { recipeID: 1, title: "Fruit Salad" },
  { recipeID: 2, title: "Avocado Wrap" },
];

function AddRecipePractice() {
  const [recipes, setRecipes] = React.useState(initialRecipes);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    // TODO:
    // Append newRecipe to recipes without using push.
    // setRecipes(...)
    
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
// TODO:
// Explain what is wrong: Splice is mutating the existing array, and react may not detect an actual
// state change
//
// TODO:
// Rewrite it correctly.

function RemoveRecipePractice() {
  const [recipes, setRecipes] = React.useState(initialRecipes);

  const handleRemove = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.recipeID !== id));
    // TODO:
    // Use filter to create a new array without the recipe
    // whose recipeID matches id.
    // setRecipes(...)
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


// ========================================
// 4. Convert .then/.catch to async/await
// ========================================

// Original:
//
// getAsyncRecipes()
//   .then((result) => {
//     console.log(result.data.recipes.length);
//   })
//   .catch((err) => console.error(err));
//
// TODO:
// Convert this to async/await with try/catch.

// Fake async function for testing.
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

async function loadRecipesPractice() {
  try {
    // TODO:
    // await getAsyncRecipes()
    // log result.data.recipes.length
    const result = await getAsyncRecipes();
    console.log(result.data.recipes.length);
  } catch (err) {
    // TODO:
    // console.error(err)
    console.error(err);
  }
}

loadRecipesPractice();

// TODO:
// call loadRecipesPractice()




// ========================================
// 5. useEffect dependency array explanation
// ========================================

// Question:
// In the data-loading useEffect,
// what would happen if you changed the dependency array from:
//
// []
//
// to:
//
// no array at all?
//
// Why is [] the right choice?

const dependencyArrayExplanation = `
TODO: Write your explanation here.
If the useEffect has no dependency array, it would run after every render, but for data loading, that can
cause repeated fetching, and if the effect updates state, it could create a render-fetch-render loop.
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
      <DismissButtonPractice
        item={sampleItem}
        onRemoveItem={handleRemoveItem}
      />

      <h2>Add Recipe</h2>
      <AddRecipePractice />

      <h2>Remove Recipe</h2>
      <RemoveRecipePractice />
    </div>
  );
}

export default App;