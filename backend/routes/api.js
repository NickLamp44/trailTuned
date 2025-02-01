const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Bike = require("../models/bike");
const Fork = require("../models/fork");
const Shock = require("../models/shock");
const Ride = require("../models/ride");
const Club = require("../models/clubs");

// Route to create a new user
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: "User created successfully", user });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Route to create a new bike
router.post("/bikes", async (req, res) => {
  try {
    const bike = new Bike(req.body);
    await bike.save();
    res.status(201).send({ message: "Bike created successfully", bike });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Route to create a new fork
router.post("/forks", async (req, res) => {
  try {
    const fork = new Fork(req.body);
    await fork.save();
    res.status(201).send({ message: "Fork created successfully", fork });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Route to create a new shock
router.post("/shocks", async (req, res) => {
  try {
    const shock = new Shock(req.body);
    await shock.save();
    res.status(201).send({ message: "Shock created successfully", shock });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Route to create a new ride
router.post("/rides", async (req, res) => {
  try {
    const ride = new Ride(req.body);
    await ride.save();
    res.status(201).send({ message: "Ride created successfully", ride });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Route to create a new club
router.post("/clubs", async (req, res) => {
  try {
    const club = new Club(req.body);
    await club.save();
    res.status(201).send({ message: "Club created successfully", club });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
