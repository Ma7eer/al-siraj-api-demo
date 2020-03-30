const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicantSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId },
    applicationId: { type: String, required: true, unique: true },
    applicantName: { type: String, default: "" },
    applicantCivilNumber: { type: String, required: true, unique: true },
    applicantPhone: { type: String, default: "" },
    applicantGovernorate: { type: String, default: "" },
    applicantState: { type: String, default: "" },
    assistance: {
      medicalTreatment: { type: Boolean, default: false },
      medicalNeeds: { type: Boolean, default: false },
      generalAssistance: { type: Boolean, default: false },
      electronics: { type: Boolean, default: false },
      education: { type: Boolean, default: false },
      socialSupport: { type: Boolean, default: false }
    }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    strict: false
  }
);

module.exports = mongoose.model("Applicant", applicantSchema);
