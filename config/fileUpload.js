const fs = require("fs");
const multer = require("multer");

// SET STORAGE
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    let dir = `documents/${req.params.applicantCivilNumber}`;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    cb(null, dir);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
