// ========================================
// PRACTICE VERSION
// Fill in the TODO sections yourself
// ========================================


// ========================================
// 1. Event loop prediction
// ========================================

// Without running the code, predict the output order.
// Write your prediction beside each line before running.

console.log("1"); // Prediction:

setTimeout(() => {
  console.log("2"); // Prediction:
}, 0);

Promise.resolve().then(() => {
  console.log("3"); // Prediction:
});

console.log("4"); // Prediction:

// Bonus:
// TODO: Explain why "3" comes before "2"
// even though setTimeout has 0 milliseconds.

// 1423


// ========================================
// 2. Rewrite callback-style fs code using async/await
// ========================================

// Original callback-style code:
//
// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) return console.error(err);
//
//   const result = transform(data);
//
//   fs.writeFile("output.txt", result, err => {
//     if (err) return console.error(err);
//
//     console.log("Done!");
//   });
// });

// Your task:
// Rewrite the code using:
// - async / await
// - try / catch
// - fs.promises.readFile
// - fs.promises.writeFile
//
// Assume transform is a synchronous function.

const fs = require("fs");

// Example transform function.
// You can change this if you want.
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
    console.log("caught:", e.message); // Prediction:
  }
}

badIdea();

// TODO:
// Predict what happens.
// Does the catch block run?
// Why or why not?


// ========================================
// 4. async function showUser(id)
// ========================================

// Given a hypothetical fetchUser(id) function that returns a Promise
// resolving to a user object, write an async function showUser(id) that:
//
// - Fetches the user.
// - Logs `${user.firstName} ${user.lastName}`.
// - If the fetch fails, logs `Could not load user 42`
//   or whatever the id was.

// Fake fetchUser function for testing.
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

// TODO: write async function showUser(id)

async function showUser(id) {
  try {
    // TODO: fetch the user using await
    const user = await fetchUser(id);

    // TODO: log firstName and lastName
    console.log(`${user.firstName} ${user.lastName}`);
  } catch (err) {
    console.log(`Could not load user ${id}`);
  }
}

// TODO: test with a working id
// showUser(42);
showUsers([42,42,42]);

// TODO: test with a failing id
// showUser(99);


// ========================================
// 5. Stretch: Promise.all
// ========================================

// Given fetchUser(id) from question 4,
// write an async function showUsers(ids) that:
//
// - Fetches a whole array of users in parallel.
// - Logs each user.
// - Uses Promise.all.
//
// Reminder:
// A for loop with await inside fetches one at a time.
// Promise.all lets them all start at once.

// TODO: write async function showUsers(ids)

async function showUsers(ids) {
  try {
    // TODO: use ids.map to create an array of Promises
    const userPromises = ids.map((id) => {
        return fetchUser(id);
    });

    // TODO: use Promise.all to wait for all users
    const users = await Promise.all(userPromises);

    // TODO: loop through the users and log each one
    users.forEach((user) => {
        console.log(`${user.firstName} ${user.lastName}`);
    });
  } catch (err) {
    console.log("Could not load one or more users.");
  }
}

// TODO: test it
// showUsers([42, 42, 42]);
showUsers([42,42,42]);