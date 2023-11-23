// ==== Problem #6 ====
/* A buyer is interested in seeing only BMW and Audi cars within the inventory.  
Execute a function and return an array that only contains BMW and Audi cars.  
Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console. */

function Problem6(cars, wanted) {
  let BMWAndAudi = cars.filter((car) => {
    if (car.car_make === wanted[0] || car.car_make === wanted[1]) {
      return true;
    }
  });
  return BMWAndAudi;
}
module.exports = Problem6;
