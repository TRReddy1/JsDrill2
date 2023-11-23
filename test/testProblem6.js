const inventory = require("../inventory");
const Problem6 = require("../problem6");

let wanted = ["BMW", "Audi"];

const result = Problem6(inventory, wanted);

console.log(JSON.stringify(result));
