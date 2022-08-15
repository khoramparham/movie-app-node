const { resetWatchers } = require("nodemon/lib/monitor/watch");
const { UserModel } = require("../Models/user.model");
const { hashString } = require("../Modules/function");

class AuthController {
  async register(req, res, next) {
    try {
      const { userName, password, email, mobile } = req.body;
      const hash_password = hashString(password);
      const User = await UserModel.create({
        userName,
        password: hash_password,
        email,
        mobile,
        // insertedBy: req.body._id,
      }).catch((err) => {
        if (err?.code == 11000) {
          throw { status: 400, message: "نام کاربری در سیستم استفاده شده" };
        }
      });
      return res.json(User);
    } catch (error) {
      next(error);
    }
  }
  async login(req, res, next) {}
  async resetPassword(req, res, next) {}
}
module.exports = {
  AuthController: new AuthController(),
};
