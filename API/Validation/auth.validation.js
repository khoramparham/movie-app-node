const { body } = require("express-validator");
const { UserModel } = require("../Models/user.model");

function registerValidator() {
  return [
    body("userName").custom(async (value) => {
      if (value) {
        const user = await UserModel.findOne({ userName: value });
        if (user) throw " تام کاربری تکراری می باشد";
        return true;
      } else {
        throw "نام کاربری نمی تواند خالی باشد";
      }
    }),
    body("password").custom((value, ctx) => {
      if (!value) throw "پسورد نمی تواند خالی باشد";
      if (value !== ctx?.req?.body?.confirm_password) {
        throw "رمز عبور با تکرار برابر نیست";
      }
      return true;
    }),
    body("email")
      .isEmail()
      .withMessage("ایمیل وارد شده صحیح نمی باشد")
      .custom(async (email) => {
        if (!email) throw "ایمیل نمی تواند خالی باشد";
        const user = await UserModel.findOne({ email });
        if (user) throw " ایمیل تکراری می باشد";
        return true;
      }),
    body("mobile")
      .isMobilePhone("fa-IR")
      .withMessage("شماره وارد شده صحیح نمی باشد")
      .custom(async (mobile) => {
        if (!mobile) throw "تلفن نمی تواند خالی باشد";
        const user = await UserModel.findOne({ mobile });
        if (user) throw " تلفن تکراری می باشد";
        return true;
      }),
  ];
}

function loginValidator() {
  return [
    body("userName").notEmpty().withMessage("نام کاربری نمی تواند خالی باشد"),
    body("password")
      .isLength({min : 6, max:16})
      .withMessage("رمز عبور حداقل 6 حرف و حداکثر 16 حرف می تواند باشد")
      .custom((value, ctx) => {
        if (!value) throw "پسورد نمی تواند خالی باشد";
        return true;
      }),
  ];
}
module.exports = {
  registerValidator,
  loginValidator,
};
