const mongoose = require("mongoose");

const ForkSchema = new mongoose.Schema({
  model: { type: String, required: true },
  travel: { type: Number, required: true },
  damperModel: { type: String, required: true },
  volumeReducers: { type: Number },
  springRate: { type: Number },
  rampAirChamber: { type: Boolean, default: false },
  compressionAdjustments: {
    highSpeed: { type: Number },
    lowSpeed: { type: Number },
  },
  reboundAdjustments: {
    highSpeed: { type: Number },
    lowSpeed: { type: Number },
  },
});

module.exports = mongoose.model("Fork", ForkSchema);
