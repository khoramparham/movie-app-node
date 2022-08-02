const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, default: "", required: true },
    description: { type: String, default: "", required: false },
    rate: { type: String, default: "", required: false },
    director: { type: mongoose.Types.ObjectId, ref: "User", required: false },
    category: [
      { type: mongoose.Types.ObjectId, ref: "Category", required: false },
    ],
    // like :  {},
    Photo: { type: mongoose.Types.ObjectId, ref: "Photo", required: false },
    insertedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: false,
      default: null,
    },
    updatedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: false,
      default: null,
    },
    deletedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: false,
      default: null,
    },
    deleteDate: { type: Date, default: null, required: false },
  },
  { timestamps: true }
);
const movieModel = mongoose.model("Movie", movieSchema);

module.exports = {
  movieModel,
};
