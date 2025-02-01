const mongoose = require("mongoose");

const ShockSchema = new mongoose.Schema({
  model: { type: String, required: true },
  stroke: { type: Number, required: true },
  eyeToEyeLength: { type: Number, required: true },
  damperModel: { type: String },
  volumeReducers: { type: Number },
  springRate: { type: Number },
  hydraulicBottomOut: { type: Boolean, default: false },
  compressionAdjustments: {
    highSpeed: { type: Number },
    lowSpeed: { type: Number },
  },
  reboundAdjustments: {
    highSpeed: { type: Number },
    lowSpeed: { type: Number },
  },
});

module.exports = mongoose.model("Shock", ShockSchema);
