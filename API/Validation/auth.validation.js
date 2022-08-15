const { body } = require("express-validator");
const { UserModel } = require("../Models/user.model");

function registerValidator() {
  return [
    body("userName").custom(async (value) => {
      if (value) {
        const user = await UserModel.findOne({ userName: value });
        if (user) throw " تام کاربری تکراری می باشد";
        // return true;
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
        const user = await UserModel.findOne({ email });
        if (user) throw " ایمیل تکراری می باشد";
        return true;
      }),
    body("mobile")
      .isMobilePhone("fa-IR")
      .withMessage("شماره وارد شده صحیح نمی باشد")
      .custom(async (mobile) => {
        const user = await UserModel.findOne({ mobile });
        if (user) throw " تلفن تکراری می باشد";
        return true;
      }),
  ];
}

module.exports = {
  registerValidator,
};
