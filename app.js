const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./db/config");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const applicantRouter = require("./routes/applicant.js");
const documentRouter = require("./routes/documents");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", applicantRouter);
app.use("/documents", documentRouter);

// connect to db
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("successfully connected to db");
});

app.listen(PORT, () => console.log(`listening on ${PORT}...`));
