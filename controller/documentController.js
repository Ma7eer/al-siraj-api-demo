const fs = require("fs");

const readFiles = async (req, res, next) => {
  try {
    let dir = await `documents/${req.params.applicantCivilNumber}`;

    fs.readdir(dir, function(err, files) {
      //handling error
      if (err) {
        return console.log("Unable to scan directory: " + err);
      }
      let fileList = [];

      //listing all files using forEach
      files.forEach(function(file) {
        // Do whatever you want to do with the file
        fileList.push(file);
      });
      res.status(200).json({ fileList });
    });
  } catch (e) {
    console.log(e);
  }
};

const uploadFile = async (req, res, next) => {
  try {
    const file = req.file;

    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }

    res.status(200).send(file);
  } catch (e) {
    console.log(e);
  }
};

const downloadFile = async (req, res) => {
  try {
    const file = `./documents/${req.params.applicantCivilNumber}/${req.params.fileName}`;
    res.status(200).download(file);
  } catch (error) {
    console.log(error);
  }
};

const deleteFile = async (req, res) => {
  try {
    let file = `./documents/${req.params.applicantCivilNumber}/${req.params.fileName}`;
    fs.unlinkSync(file);
    res.status(200).json({ message: "successfully deleted file" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  uploadFile,
  readFiles,
  downloadFile,
  deleteFile
};
