// ℹ️ package responsible to make the CONNECTION WITH MONGODB
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.

// If no env (???) has been set, we dynamically set it to 
//whatever the folder name was upon the creation of the app

require ("../db/index.js"); 
const Drone = require ("../models/Drone.model.js") // iteration 1 ?

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`WELL DONE Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
