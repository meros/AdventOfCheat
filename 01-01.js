// Read file into input
var input = require("fs").readFileSync("01.input.txt").toString();

// Split the input into individual Elves' inventories
const inventories = input.trim().split(/\n\n/);

// Keep track of the maximum number of Calories and the Elf that is carrying it
let maxCalories = 0;
let maxElf;

// Iterate over each inventory and find the sum of the Calories
for (const inventory of inventories) {
  const calories = inventory
    .split(/\n/)
    .map(Number)
    .reduce((a, b) => a + b, 0);
  if (calories > maxCalories) {
    maxCalories = calories;
    maxElf = inventory;
  }
}

// Print the result
console.log(
  `The Elf carrying the most calories is carrying ${maxCalories} Calories.`
);
