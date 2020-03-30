const mongoose = require("mongoose");
require("dotenv").config();

// Connect to mongodb
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true); // fixed error with internal mongoDB depreciated module

// check db connection
const db = mongoose.connection;

module.exports = db;
