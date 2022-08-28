const mongoose = require("mongoose");

const pictureSchema = new mongoose.Schema({
  fieldname: { type: String, required: false },
  originalname: { type: String, required: false },
  mimeType: { type: String, required: false },
  destination: { type: String, required: false },
  filename: { type: String, required: false },
  path: { type: String, required: false },
  size: { type: Number, required: false },
  typePicture:{},
  referenceType: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: false,
    default: null,
  },
});

const pictureModel = mongoose.model("Picture", pictureSchema);
module.exports = {
  pictureModel,
};
