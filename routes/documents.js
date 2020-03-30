const express = require("express");
const router = express.Router();

const upload = require("../config/fileUpload");
const documentController = require("../controller/documentController");

// READ all files in directory
router.get("/:applicantCivilNumber", documentController.readFiles);

// DOWNLOAD one file from directory
router.get("/:applicantCivilNumber/:fileName", documentController.downloadFile);

// UPLOAD one file to directory
router.post(
  "/:applicantCivilNumber",
  upload.single("file"),
  documentController.uploadFile
);

// DELETE one file from directory
router.delete(
  "/:applicantCivilNumber/:fileName",
  documentController.deleteFile
);

module.exports = router;
