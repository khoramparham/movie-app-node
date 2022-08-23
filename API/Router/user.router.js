const { UserController } = require("../Controller/user.controller");
const { checkLogin } = require("../MiddleWares/autoLogin");

const router = require("express").Router();

router.get("/profile", checkLogin, UserController.getProfile);
router.put("/update", checkLogin, UserController.updateUser);
router.delete("/delete", checkLogin, UserController.deleteUser);
module.exports = {
  userRoutes: router,
};
