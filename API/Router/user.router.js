const { UserController } = require("../Controller/user.controller");
const { checkLogin } = require("../MiddleWares/autoLogin");
const { expressValidatorMapper } = require("../MiddleWares/errorMapper");
const { uploadMulter } = require("../Modules/multer");
const { imageValidator } = require("../Validation/user.validation");

const router = require("express").Router();

router.get("/profile", checkLogin, UserController.getProfile);
router.put("/update", checkLogin, UserController.updateUser);
router.delete("/delete", checkLogin, UserController.deleteUser);
router.post(
  "/uploadProfileImage",
  checkLogin,
  imageValidator(),
  expressValidatorMapper,
  uploadMulter.single("img"),
  UserController.uploadProfileImage
);
module.exports = {
  userRoutes: router,
};
