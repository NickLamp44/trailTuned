const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ClubSchema = new mongoose.Schema({
  clubName: { type: String, required: true },
  description: { type: String },
  members: [{ type: ObjectId, ref: "User" }],
  chatHistory: [
    {
      message: { type: String, required: true },
      sender: { type: ObjectId, ref: "User" },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Club", ClubSchema);
