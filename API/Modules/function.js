const bcrypt = require("bcrypt");
function hashString(str) {
  const salt = bcrypt.genSaltSync(13);
  return bcrypt.hashSync(str, salt);
}

module.exports = {
  hashString,
};
