// // Iteration #1

// The first step is to : CREATE THE DRONE MODEL  // and  seed some initial drones in our database.
// The Drone model should have : // name  - String  (name of the drone model, like General Atomics MQ-9 Reaper)
// propellers  - Number  (amount of propellers, like 4) // maxSpeed  - Number  (meters per second for the drone's maximum speed, like 18)
// 1.1 - Go to the Drone.model.js file in the models folder. // DONE // Use Mongoose schema and make sure that 
// the Drone model has all the properties listed above. // D // Hint: Don't forget to export the Drone model. // D

const {model, Schema} = require("mongoose")

const DroneSchema = new Schema ({
    name : String,
    propellers : Number,
    maxSpeed : Number
})

const Drone = model("drone", DroneSchema )
// Done model : le nom de la collection et le schema à respecter.

module.exports = Drone;

