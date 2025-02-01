const express = require("express");
const mongoose = require("mongoose");
const config = require("../config/config");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Log MongoDB URI for debugging purposes
console.log("MongoDB URI:", config.mongoURI);

// Connect to MongoDB
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("🚀 Connected to MongoDB successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Use API routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Start server
app.listen(config.port, () => {
  console.log(` 👾 Server running on port ${config.port} 👾`);
});
// :
