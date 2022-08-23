const { UserModel } = require("../Models/user.model");
const { hashString, tokenGenerator } = require("../Modules/function");
const bcrypt = require("bcrypt");
class AuthController {
  async register(req, res, next) {
    try {
      const { userName, password, email, mobile, firstName, lastName } =
        req.body;
      const hash_password = hashString(password);
      const User = await UserModel.create({
        firstName,
        lastName,
        userName,
        password: hash_password,
        email,
        mobile,
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
  async login(req, res, next) {
    try {
      const { userName, password } = req.body;
      const user = await UserModel.findOne({ userName });
      if (!user) throw { status: 401, message: " تام کاربری تکراری می باشد" };
      const compareResult = await bcrypt.compareSync(password, user.password);
      if (!compareResult)
        throw { status: 401, message: "رمز عبور یا نام کاربری اشتباه است" };
      const token = tokenGenerator({ userName });
      return res.status(200).json({
        status: 200,
        success: true,
        message: "شما یا موفقیت وارد شدبد",
        token: token,
      });
    } catch (error) {
      next(error);
    }
  }
  async resetPassword(req, res, next) {}
}
module.exports = {
  AuthController: new AuthController(),
};
