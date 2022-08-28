const multer = require("multer");
const fs = require("fs");
const { createPath } = require("./function");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, createPath());
  },
  filename: (req, file, cb) => {
    const type = path.extname(file?.originalname || "");
    cb(null, Date.now() + type);
  },
});

const uploadMulter = multer({ storage });
module.exports = {
  uploadMulter,
};
