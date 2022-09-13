const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, default: "", required: true },
    description: { type: String, default: "", required: false },
    rate: { type: Number, default: "", required: false },
    director: { type: mongoose.Types.ObjectId, ref: "User", required: false },
    category: { type: [String], required: false },
    // like :  {},
    Photo: { type: String, default: [], required: false },
    insertedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);
const movieModel = mongoose.model("Movie", movieSchema);

module.exports = {
  movieModel,
};
