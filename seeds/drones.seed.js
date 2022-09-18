// Iteration #1

// ----- REMPLISSAGE DATABASE AVEC SEED -----
// 1.2  In the seeds/drones.seeds.js file: // Create an array of 3 objects : each with name,
// propellers and maxSpeed as our initial drones. DONE // Establish a connection to the database. DONE
//You can use the same code in db/index.js. DONE // Once the database connection is established, ...

// The connection to the database :
require("../db/index.js");
const Drone = require("../models/Drone.model.js");

const drones = [
  {
    name: "SuperSpider",
    propellers: 8,
    maxSpeed: 20,
  },
  {
    name: "SpicyPhoenix",
    propellers: 6,
    maxSpeed: 18,
  },
  {
    name: "AngryLion",
    propellers: 4,
    maxSpeed: 16,
  },
];

// call the Drone model's .create() method with the array as an argument. // If the .create() method successfully creates the drones collection,
// output (using console.log()) how many drones have been created. // In case, the seeding of the database fails, catch the error and output it.

(async function createDrone() {
  try {
    await Drone.deleteMany();
    const createdDrones = await Drone.create(drones); //DONE
    console.log(`You've created ${createdDrones.length} BEAUTIFUL drones`); //DONE
    process.exit();
  } catch (err) {
    //DONE
    console.error(err);
    process.exit();
  }
})();
