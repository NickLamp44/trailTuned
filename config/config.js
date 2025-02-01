const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports = {
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT || 5001,
};
