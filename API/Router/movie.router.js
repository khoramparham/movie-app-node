const router = require("express").Router();
const { MovieController } = require("../Controller/movie.controller");
const { checkLogin } = require("../MiddleWares/autoLogin");
const { expressValidatorMapper } = require("../MiddleWares/errorMapper");
const { uploadMulter } = require("../Modules/multer");
const { movieValidator } = require("../Validation/movie.validation");
router.get(
  "/storeMovie",
  checkLogin,
  uploadMulter.single("img"),
  movieValidator(),
  expressValidatorMapper,
  MovieController.storeMovie
);
module.exports = {
  movieRoutes: router,
};
