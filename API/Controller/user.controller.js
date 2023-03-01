// const { pictureModel } = require("../Models/picture.model");
const { UserModel } = require("../Models/user.model");
const { createLinkForFiles } = require("../Modules/function");
class UserController {
  async getProfile(req, res, next) {
    try {
      const userID = req.user._id;
      const user = await UserModel.findById({ id: userID });
      if (!user) throw "یافتن کاربر با مشکل مواجه شد";
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
      const user = await UserModel.findById({ _id: userID });
      if (!user) throw "کاربر یافت نشد";
      const userUpdate = await UserModel.findByIdAndUpdate(
        { _id: userID },
        {
          firstName: firstName,
          lastName: lastName,
        }
      );
      if (!userUpdate) throw "بروز رسانی با مشکل مواجه شد";
      return res.status(200).json({
        status: 200,
        success: true,
        message: "کاریر به روز رسانی شد",
        userUpdate,
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteUser(req, res, next) {
    try {
      const userID = req.user._id;
      const user = await UserModel.findById({ _id: userID });
      if (!user) throw "کاربری وجود ندارد";
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
      const filePath = req.file?.path?.substring(7).replace(/[\\\\]/gm, "/");
      const photo = createLinkForFiles(filePath, req);
      const result = await UserModel.findByIdAndUpdate(
        { _id: userID },
        { profilePhoto: photo }
      );
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
  async findUserByID(req, res, next) {
    const userID = req.params.id;
    const user = await UserModel.findById({ _id: userID });
    if (!user) throw "کاربری وجود ندارد";
    return res.status(200).json({
      status: 200,
      success: true,
      message: "کاربر با موفقیت یافت شد",
      user,
    });
  }
  async searchUser(req, res, next) {}
}
module.exports = {
  UserController: new UserController(),
};
