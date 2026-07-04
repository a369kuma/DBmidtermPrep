// ========================================
// ANSWER VERSION
// ========================================


// ========================================
// 1. Event loop prediction
// ========================================

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

// Output order:
// 1
// 4
// 3
// 2

// Explanation:
// Synchronous code runs first, so "1" and "4" print first.
// The Promise callback goes into the microtask queue.
// The setTimeout callback goes into the macrotask queue.
// Microtasks run before macrotasks, so "3" prints before "2".


// ========================================
// 2. Rewrite callback-style fs code using async/await
// ========================================

const fs = require("fs");

// Example synchronous transform function.
function transform(data) {
  return data.toUpperCase();
}

async function processFile() {
  try {
    const data = await fs.promises.readFile("input.txt", "utf8");

    const result = transform(data);

    await fs.promises.writeFile("output.txt", result);

    console.log("Done!");
  } catch (err) {
    console.error(err);
  }
}

processFile();


// ========================================
// 3. Predict the output, then explain why
// ========================================

function badIdea() {
  try {
    setTimeout(() => {
      throw new Error("boom");
    }, 100);
  } catch (e) {
    console.log("caught:", e.message);
  }
}

badIdea();

// Output:
// The catch block does NOT catch the error.
//
// Explanation:
// The try/catch only catches errors that happen while the try block is currently running.
// setTimeout runs later, after the try/catch has already finished.
// So the error is thrown asynchronously, outside the original try/catch.
// In Node, this usually crashes the program with an uncaught error.


// ========================================
// 4. async function showUser(id)
// ========================================

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 42) {
        resolve({
          firstName: "Olga",
          lastName: "Petrova"
        });
      } else {
        reject(new Error("User not found"));
      }
    }, 500);
  });
}

async function showUser(id) {
  try {
    const user = await fetchUser(id);

    console.log(`${user.firstName} ${user.lastName}`);
  } catch (err) {
    console.log(`Could not load user ${id}`);
  }
}

showUser(42);
// Olga Petrova

showUser(99);
// Could not load user 99


// ========================================
// 5. Stretch: Promise.all
// ========================================

async function showUsers(ids) {
  try {
    const userPromises = ids.map((id) => {
      return fetchUser(id);
    });

    const users = await Promise.all(userPromises);

    users.forEach((user) => {
      console.log(`${user.firstName} ${user.lastName}`);
    });
  } catch (err) {
    console.log("Could not load one or more users");
  }
}

showUsers([42, 42, 42]);

// Output after the promises resolve:
// Olga Petrova
// Olga Petrova
// Olga Petrova