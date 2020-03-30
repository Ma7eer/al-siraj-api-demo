const express = require("express");
const router = express.Router();

const applicantController = require("../controller/applicantController.js");

router.get("/", applicantController.applicantList);
router.get("/:applicantCivilNumber", applicantController.oneApplicant);
router.post("/", applicantController.addNewApplicant);
router.patch("/:id", applicantController.editApplicant);
router.delete("/:applicantCivilNumber", applicantController.deleteApplicant);

module.exports = router;
