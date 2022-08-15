const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, default: "", required: false },
    lastName: { type: String, default: "", required: false },
    userName: { type: String, required: true, unique: true },
    password: { type: String, default: "", required: true },
    profilePhoto: {
      type: mongoose.Types.ObjectId,
      ref: "Photo",
      required: false,
    },
    email: { type: String, default: "", required: false ,unique: true},
    mobile: { type: String, default: "", required: false, unique: true },
    role: { type: [String], default: ["User"], require: false },
    insertedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: false,
      default: null,
    },
    status: { type: String, required: false },
    // insertDate: { type: Date, default: new Date().toISOString(), required: true },
    updatedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: false,
      default: null,
    },
    // updateDate: { type: Date, default: new Date().toISOString(), required: true },
    isDeleted: { type: Boolean, default: false, required: true },
    deletedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: false,
      default: null,
    },
    deleteDate: { type: Date, default: null, required: false },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("User", UserSchema);
module.exports = {
  UserModel,
};
