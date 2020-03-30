const ApplicantModel = require("../models/applicant.js");

const applicantList = async (req, res) => {
  try {
    let applicants = await ApplicantModel.find();
    res.status(200).json({ message: "successful GET", applicants });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const oneApplicant = async (req, res) => {
  try {
    let applicant = await ApplicantModel.find({
      applicantCivilNumber: req.params.applicantCivilNumber
    });
    res.status(200).json({ message: "successful GET", applicant });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const addNewApplicant = async (req, res) => {
  try {
    const newApplicant = new ApplicantModel();
    // res message when something is required
    // res message when something is not unique but should be

    newApplicant.applicationId = await req.body.applicationId;
    newApplicant.applicantCivilNumber = await req.body.applicantCivilNumber;
    newApplicant.applicantName = await req.body.applicantName;
    newApplicant.applicantPhone = await req.body.applicantPhone;
    newApplicant.applicantGovernorate = await req.body.applicantGovernorate;
    newApplicant.applicantState = await req.body.applicantState;
    newApplicant.assistance.medicalTreatment = await req.body.assistance
      .medicalTreatment;
    newApplicant.assistance.medicalNeeds = await req.body.assistance
      .medicalNeeds;
    newApplicant.assistance.generalAssistance = await req.body.assistance
      .generalAssistance;
    newApplicant.assistance.electronics = await req.body.assistance.electronics;
    newApplicant.assistance.education = await req.body.assistance.education;
    newApplicant.assistance.socialSupport = await req.body.assistance
      .socialSupport;

    await newApplicant.save();
    res.status(200).json({ message: "successful POST" });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const editApplicant = async (req, res) => {
  try {
    await ApplicantModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json({ message: "existing document updated!" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteApplicant = async (req, res) => {
  try {
    await ApplicantModel.findOneAndDelete({
      applicantCivilNumber: req.params.applicantCivilNumber
    });
    res.status(200).json({ message: "existing document deleted!" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  applicantList,
  addNewApplicant,
  editApplicant,
  oneApplicant,
  deleteApplicant
};
