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

module.exports = {
  hashString,
  tokenGenerator,
  tokenVerify,
};
