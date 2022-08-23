const { tokenVerify } = require("../Modules/function");
const { UserModel } = require("../Models/user.model");

async function checkLogin(req, res, next) {
  try {
    const authorization = req?.headers?.authorization;
    if (!authorization)throw { status: 401, message: "لطفا وارد حساب کاربری خود شوید" };
    let token = authorization.split(" ")[1];
    if (!token)throw { status: 401, message: "لطفا وارد حساب کاربری خود شوید" };
    const result = tokenVerify(token);
    const {userName} = result;
    const user = await UserModel.findOne({userName},{password : 0});
    if(!user) throw { status: 401, message: "لطفا وارد حساب کاربری خود شوید" };
    req.user = user;
    return next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  checkLogin,
};
