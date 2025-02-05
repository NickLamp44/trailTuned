const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/user");
const Bike = require("../models/bike");
const Fork = require("../models/fork");
const Shock = require("../models/shock");
const Ride = require("../models/ride");
const Club = require("../models/clubs");

// Route to create a new user
router.post("/users", async (req, res) => {
  console.log("Received payload:", req.body);

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    return res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    console.error("❌ Error creating user:", err.message);
    return res.status(400).json({ error: err.message });
  }
});

// Route to Login
router.post("/users/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ name: username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare provided password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, name: user.name },
      config.jwtSecret,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
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
