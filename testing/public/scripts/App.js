import DataMobil from "/probable-garbanzo/data/cars.json" assert { type: "json" };
import Car from "/probable-garbanzo/scripts/Car.js";

const result = document.getElementById("result");

DataMobil.forEach((car) => {
  const newCar = new Car(car.model, car.manufacture);
  const newDiv = document.createElement("div");

  newDiv.innerHTML = newCar.render();
  result.appendChild(newDiv);
});