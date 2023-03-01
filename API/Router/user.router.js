const { UserController } = require("../Controller/user.controller");
const { checkLogin } = require("../MiddleWares/autoLogin");
const { expressValidatorMapper } = require("../MiddleWares/errorMapper");
const { uploadMulter } = require("../Modules/multer");
const { imageValidator } = require("../Validation/user.validation");

const router = require("express").Router();

router.get("/profile", checkLogin, UserController.getProfile);
router.get("/profileByID/:id", checkLogin, UserController.findUserByID);
router.put("/update", checkLogin, UserController.updateUser);
router.delete("/delete/:id", checkLogin, UserController.deleteUser);
router.put(
  "/uploadProfileImage",
  checkLogin,
  uploadMulter.single("img"),
  imageValidator(),
  expressValidatorMapper,
  UserController.uploadProfileImage
);
module.exports = {
  userRoutes: router,
};
