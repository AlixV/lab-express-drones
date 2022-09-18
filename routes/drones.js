const express = require("express");
const router = express.Router();

// require the Drone model here
require("../db/index.js");
const Drone = require("../models/Drone.model.js");

//  ---- Iteration #2: List the drones ----
// Find the /drones GET route in routes/drones.js. OK // Use the Mongoose .find() method to retrieve all the drones. OK
// Display all the drones on the drones/list.hbs view. -> with render OK // Make sure you catch the error and output it to the terminal.
router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((dbResponse) => {
      console.log("LOOK Db response :", dbResponse);
      res.render("drones/list.hbs", {
        drones: dbResponse,
      });
    })
    .catch((e) => console.log(e));
});

// Iteration #3.1: Add a new drone
// render the drones/create-form.hbs view
router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs"); // OK
});

// Iteration #3.3: Add a new drone
// /drones/create POST route in routes/drones.js
// and using - req.body -  =>>> get all the info user submitted
// through the form. Use this info to create a new drone in
// the database in the drones collection.
// Redirect to /drones if the new drone is successfully created.
// If there is an error, render again the view so the user
// can try again to create a drone.
router.post("/drones/create", (req, res, next) => {
  console.log(req.body);
  // const { name, propellers, maxSpeed } = req.body;
  Drone.create(req.body)
    .then((newDrone) => {
      console.log("newDrone: ", newDrone);
      res.redirect("/drones");
    })
    .catch((e) => {
      console.error(e);
      res.redirect("/drones/create");
    });
});

// #4.2: --- UPDATE THE DRONE ---
// Qd on ira sur cette route que l'on définie ici, voilà ce qu'il faut faire :
// Get the right drone from the db using the available id with .findById()
// and req.params.id. OK  Render the drones/update-form.hbs view. OK avec info db
// and pass the drone object to the view.
router.get("/drones/:id/edit", (req, res, next) => {
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render("drones/update-form.hbs", { drone: drone });
    })
    //.catch(next);
    .catch((e) => console.error(e));
});

// #4.4: Update the drone
//  Using req.body get all the info user submitted through the form. OK
// Use this info to update the existing drone in the database.
// with .findByIdAndUpdate() Mongoose method.
// Redirect to /drones if the new drone is successfully updated.
// If there is an error, render again the view so the user can try again.
// --- j'ai add "async"
router.post("/drones/:id/edit", async (req, res, next) => {
  try {
    await Drone.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/drones");
  } catch (err) {
    res.redirect("/drones/create");
  }
});

// #5: -- Delete the drone --
// Use .findByIdAndDelete() or .findByIdAndRemove(), to
//  destroy the document with the given ID from the db.
router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params; // ajout de cette const
  //console.log(req.params.id === id)
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones")) // supprimer (success)
    .catch((e) => console.error(e));
});

module.exports = router;
