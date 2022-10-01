const router = require("express").Router();
const { MovieController } = require("../Controller/movie.controller");
const { checkLogin } = require("../MiddleWares/autoLogin");
const { expressValidatorMapper } = require("../MiddleWares/errorMapper");
const { uploadMulter } = require("../Modules/multer");
const { movieValidator } = require("../Validation/movie.validation");
const { mongoIDValidator } = require("../Validation/public.validation");
router.post(
  "/storeMovie",
  checkLogin,
  uploadMulter.single("img"),
  movieValidator(),
  expressValidatorMapper,
  MovieController.storeMovie
);
router.get(
  "/:id",
  mongoIDValidator(),
  checkLogin,
  MovieController.getMovieByID
);
router.get("/getAllMovie", checkLogin, MovieController.getAllMovie);
router.patch(
  "/edit/:id",
  mongoIDValidator(),
  checkLogin,
  MovieController.editMovie
);
router.delete(
  "/delete/:id",
  mongoIDValidator(),
  checkLogin,
  MovieController.deleteMovie
);
router.get("/search", checkLogin, MovieController.searchMovie);

module.exports = {
  movieRoutes: router,
};
