const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const RideSchema = new mongoose.Schema({
  userId: { type: ObjectId, ref: "User", required: true },
  rideDate: { type: Date, default: Date.now },
  route: {
    mapPolyline: { type: String }, // Encoded polyline for route mapping
    distance: { type: Number }, // Distance in km
    duration: { type: Number }, // Duration in minutes
    averageSpeed: { type: Number }, // km/h
    topSpeed: { type: Number }, // km/h
    elevationGain: { type: Number }, // Total climb in meters
  },
  bikeSetup: { type: ObjectId, ref: "Bike", required: true },
});

module.exports = mongoose.model("Ride", RideSchema);
