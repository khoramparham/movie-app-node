const { UserController } = require("../Controller/user.controller");
const { checkLogin } = require("../MiddleWares/autoLogin");

const router = require("express").Router();

router.get("/profile" , checkLogin ,UserController.getProfile)
module.exports = {
  userRoutes: router,
};
