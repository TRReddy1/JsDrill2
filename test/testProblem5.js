const inventory = require("../inventory");
const problem4 = require("../problem4");
const problem5 = require("../problem5");

const yearsList = problem4(inventory);
const result = problem5(inventory, yearsList, 2000);

console.log(result);
console.log(result.length);
