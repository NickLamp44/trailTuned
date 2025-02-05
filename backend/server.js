const express = require("express");
const mongoose = require("mongoose");
const config = require("../config/config");
const cors = require("cors");

const app = express();
app.use(cors({ origin: ["http://localhost:8081"] }));
app.use(express.json());

console.log("MongoDB URI:", config.mongoURI);

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("🚀 Connected to MongoDB successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// Use API routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(config.port, () => {
  console.log(`👾 Server running on port ${config.port} 👾`);
});
