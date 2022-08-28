const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, default: "", required: false },
    lastName: { type: String, default: "", required: false },
    userName: { type: String, required: true, unique: true },
    password: { type: String, default: "", required: true },
    profilePhoto: {type: String, required: false},
    email: { type: String, default: "", required: false ,unique: true},
    mobile: { type: String, default: "", required: false, unique: true },
    role: { type: [String], default: ["User"], require: false },
    status: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("User", UserSchema);
module.exports = {
  UserModel,
};
