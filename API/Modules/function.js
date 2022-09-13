const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
function hashString(str) {
  const salt = bcrypt.genSaltSync(13);
  return bcrypt.hashSync(str, salt);
}

function tokenGenerator(payload) {
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "2 days",
  });
  return token;
}

function tokenVerify(token) {
  const result = jwt.verify(token, process.env.SECRET_KEY);
  if (!result?.userName)
    throw { status: 401, message: "وارد حساب کاربری خود شوید" };
  return result;
}

function createPath() {
  const path = require("path");
  const fs = require("fs");

  const Year = "" + new Date().getFullYear();
  const Month = "" + new Date().getMonth();
  const Day = "" + new Date().getDay();
  const uploadPath = path.join(
    __dirname,
    "..",
    "..",
    "public",
    "upload",
    Year,
    Month,
    Day
  );
  fs.mkdirSync(uploadPath, { recursive: true });
  return path.join("public", "upload", Year, Month, Day);
}

function createLinkForFiles(fileAddress, req) {
  return fileAddress? (req.protocol + "://" + req.get("host")+ "/" + (fileAddress.replace(/[\\\\]/gm, "/"))) : undefined
}

module.exports = {
  hashString,
  tokenGenerator,
  tokenVerify,
  createPath,
  createLinkForFiles,
};
