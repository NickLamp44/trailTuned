const mongoose = require("mongoose");

// Bike Schema
const BikeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Correct reference to ObjectId
  manufacturer: { type: String, required: true },
  frameModel: { type: String, required: true },
  productionYear: { type: Number, required: true },
  frameSize: { type: String },
  frameTravel: {
    eyeToEyeLength: Number,
    shockStroke: Number,
  },
  wheelSize: String,
  inFrameAdjustments: Boolean,
  fork: {
    model: String,
    travel: Number,
    damperModel: String,
    volumeReducers: Number,
    springRate: Number,
    rampAirChamber: Boolean,
    compressionAdjustments: {
      highSpeed: Number,
      lowSpeed: Number,
    },
    reboundAdjustments: {
      highSpeed: Number,
      lowSpeed: Number,
    },
  },
  shock: {
    model: String,
    stroke: Number,
    eyeToEyeLength: Number,
    damperModel: String,
    volumeReducers: Number,
    springRate: Number,
    hydraulicBottomOut: Boolean,
    compressionAdjustments: {
      highSpeed: Number,
      lowSpeed: Number,
    },
    reboundAdjustments: {
      highSpeed: Number,
      lowSpeed: Number,
    },
  },
});

module.exports = mongoose.model("Bike", BikeSchema);
