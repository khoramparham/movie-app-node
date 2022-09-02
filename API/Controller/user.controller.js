const { pictureModel } = require("../Models/picture.model");
const { UserModel } = require("../Models/user.model");
class UserController {
  async getProfile(req, res, next) {
    try {
      const user = req.user;
      return res.status(200).json({
        status: 200,
        success: true,
        user,
      });
    } catch (error) {
      next(error);
    }
  }
  async updateUser(req, res, next) {
    try {
      const { firstName, lastName } = req.body;
      const userID = req.user._id;
      await UserModel.findByIdAndUpdate(
        { _id: userID },
        {
          firstName: firstName,
          lastName: lastName,
        }
      );
      return res.status(200).json({
        status: 200,
        success: true,
        message: "کاریر به روز رسانی شد",
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteUser(req, res, next) {
    try {
      const userID = req.user._id;
      await UserModel.deleteOne({ _id: userID });
      return res.status(200).json({
        status: 200,
        success: true,
        message: "کاریر حذف شد",
      });
    } catch (error) {
      next(error);
    }
  }
  async uploadProfileImage(req, res, next) {
    try {
      const userID = req.user._id;
      if (Object.keys(req.file).length == 0)
        throw { status: 400, message: "تصویر را انتخاب کنید" };
      const filePath = req.file?.path?.substring(7).replace(/[\\\\]/gm,"/");
      const result = await UserModel.findByIdAndUpdate(
        { _id: userID },
        { profilePhoto: filePath }
      );
      // const result = await pictureModel.create({
      //   fieldname: req.file.fieldname,
      //   originalname: req.file.originalname,
      //   mimeType: req.file.mimeType,
      //   destination: req.file.destination,
      //   filename: req.file.filename,
      //   path: req.file.path,
      //   size: req.file.size,
      //   typePicture: ,
      //   referenceType: userID,
      // });
      if (result.modifiedCount == 0)
        throw { status: 400, message: "به روزرسانی انجام نشد" };
      return res.status(200).json({
        status: 200,
        success: true,
        message: "به روز رسانی با موفقیت انجام شد",
      });
    } catch (error) {
      next(error);
    }
  }
  async findUser(req, res, next) {}
  async searchUser(req, res, next) {}
}
module.exports = {
  UserController: new UserController(),
};
