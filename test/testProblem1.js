const inventory = require("../inventory");
const findCar = require("../problem1");

const result = findCar(inventory, 33);

console.log(
  `Car 33 is a ${result[0].car_year} ${result[0].car_make} ${result[0].car_model}`
);
