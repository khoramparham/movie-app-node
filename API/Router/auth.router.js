const router = require("express").Router();
const { AuthController } = require("../Controller/auth.controller");
const { registerValidator, loginValidator } = require("./../Validation/auth.validation");
const { expressValidatorMapper } = require("../MiddleWares/errorMapper");

router.post(
  "/register",
  registerValidator(),
  expressValidatorMapper,
  AuthController.register
);

router.post("/login", loginValidator(), expressValidatorMapper, AuthController.login);

module.exports = {
  authRoutes: router,
};
