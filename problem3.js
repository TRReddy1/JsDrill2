// ==== Problem #3 ====
/* The marketing team wants the car models listed alphabetically on the website.
 Execute a function to Sort all the car model names into alphabetical order and log 
 the results in the console as it was returned. */

function problem3(cars) {
  const carModels = cars.map((car) => car.car_model);

  const sorted = carModels.sort((a, b) => {
    let carA = a.toLowerCase();
    let carB = b.toLowerCase();
    return carA > carB ? 1 : -1;
  });
  return sorted;
}

module.exports = problem3;
