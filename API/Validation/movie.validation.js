const { body } = require("express-validator");
const path = require("path");

function movieValidator() {
  return [
    body("name").notEmpty().withMessage("نام فیلم نمی تواند خالی باشد"),
    body("rate").custom((rate, { req }) => {
      if (!(0 <= rate && rate <= 10)) throw "امتیاز را درست انتخاب کنید";
      return true;
    }),
    body("Photo").custom((value, { req }) => {
      if (req.file === undefined || req.file === null)
        throw "تصویر را انتخاب کنید";
      const ext = path.extname(req.file.originalname);
      const exts = [".png", ".JPG", ".jpeg", ".gif", ".webp"];
      if (!exts.includes(ext)) throw "فرمت ارسال شده صحیح نیست";
      const maxSize = 2 * 1024 * 1024;
      if (req.file.size > maxSize)
        throw "حجم فایل نمی تواند بیش تر از 2 مگابایت باشد";
      return true;
    }),
  ];
}
module.exports = {
  movieValidator,
};
