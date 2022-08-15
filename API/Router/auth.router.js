const router = require("express").Router();
const { AuthController } = require("../Controller/auth.controller");
const { registerValidator } = require("./../Validation/auth.validation");
const { expressValidatorMapper } = require("../MiddleWares/errorMapper");

router.post(
  "/register",
  registerValidator(),
  expressValidatorMapper,
  AuthController.register
);



module.exports = {
  authRoutes: router,
};
