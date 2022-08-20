const { UserModel } = require("../Models/user.model");
class UserController {
  async getProfile(req, res, next) {
    try {
      // const { firstName, LastName, _id } = req.body;
      // const user = await UserModel.findById({ _id });
      const user = req.user
      return res.status(200).json({
        status: 200,
        success: true,
        user
      });
    } catch (error) {
      next(error);
    }
  }
  async updateUser(res, req, next) {}
  async deleteUser(res, req, next) {}
  async findUser(res, req, next) {}
  async searchUser(res, req, next) {}
}
module.exports = {
  UserController: new UserController(),
};
