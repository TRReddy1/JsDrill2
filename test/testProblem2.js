const inventory = require("../inventory");
const lastCar = require("../problem2");

const result = lastCar(inventory, inventory.length);

let car = result[0];

console.log(`Last car is a ${car.car_make} ${car.car_model}`);
