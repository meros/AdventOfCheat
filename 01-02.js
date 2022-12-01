// Read file into input
var input = require("fs").readFileSync("01.input.txt").toString();

// Split the input into individual Elves' inventories
const inventories = input.trim().split(/\n\n/);

// Create an array to store the Elves and their associated Calories
const elves = [];

// Iterate over each inventory and find the sum of the Calories
for (const inventory of inventories) {
  const calories = inventory.split(/\n/).map(Number).reduce((a, b) => a + b, 0);
  elves.push({ inventory, calories });
}

// Sort the array in descending order by the number of Calories
elves.sort((a, b) => b.calories - a.calories);

// Keep only the top three Elves carrying the most Calories
const topThreeElves = elves.slice(0, 3);

// Find the total Calories carried by the top three Elves
const totalCalories = topThreeElves.reduce((a, b) => a + b.calories, 0);

// Print the result
console.log(`The top three Elves carrying the most calories are carrying ${totalCalories} Calories in total.`);