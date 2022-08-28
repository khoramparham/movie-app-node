const { body } = require("express-validator");
const path = require("path");
function imageValidator() {
  return [
    body("img").custom((img, { req }) => {
      if (Object.keys(req.file).length == 0) throw "تصویر را انتخاب کنید";
      const ext = path.extname(req.file.originalname);
      const exts = [".png", ".JPG", ".jpeg", ".gif", ".webp"];
      if (!exts.includes(ext)) throw "فرمت ارسال شده صحیح نیست";
      const maxSize = 2 * 1024 * 1024;
      if (req.file.size > maxSize) throw "حجم فایل نمی تواند بیش تر از 2 مگابایت باشد";
      return true;
    }),
  ];
}
module.exports = { imageValidator };
