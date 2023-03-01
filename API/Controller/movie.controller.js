const { movieModel } = require("../Models/movie.model");
const { createLinkForFiles } = require("../Modules/function");
class MovieController {
  async storeMovie(req, res, next) {
    try {
      const { name, description, rate, director, category } = req.body;
      const userID = req.user._id;
      const filePath = req.file?.path?.substring(7).replace(/[\\\\]/gm, "/");
      const photo = createLinkForFiles(filePath, req);
      const movie = await movieModel.create({
        name,
        description,
        rate,
        director,
        Photo: photo,
        category,
        insertedBy: userID,
      });
      if (!movie) throw { status: 400, message: "افزودن فیلم با مشکل مواجه شد" };
      return res.status(201).json({
        status: 201,
        success: true,
        movie,
      });
    } catch (error) {
      next(error);
    }
  }
  async getMovieByID(req, res, next) {
    try {
      const movieID = req.params.id;
      const movie = await movieModel.findOne({ _id: movieID });
      if (!movie) throw "فیلم یافت نشد";
      return res.status(200).json({
        status: 200,
        success: true,
        movie,
      });
    } catch (error) {
      next(error);
    }
  }
  async getAllMovie(req, res, next) {
    try {
      const allMovies = await movieModel.find({});
      if (!allMovies) throw "فیلم یافت نشد";
      return res.status(200).json({
        status: 200,
        success: true,
        allMovies,
      });
    } catch (error) {
      next(error);
    }
  }
  async editMovie(req, res, next) {
    try {
      const userID = req.user._id;
      const movieID = req.params.id;
      const { name, description, rate, director, category } = req.body;
      const movie = await movieModel.findOne({
        _id: movieID,
        insertedBy: userID,
      });
      if (!movie) throw "فیلم یافت نشد";
      const movieUpdate = await movieModel.findByIdAndUpdate(
        { _id: movieID },
        { name, description, rate, director, category }
      );
      return res.status(200).json({
        status: 200,
        success: true,
        message: "فیلم با موفقیت به روز رسانی شد",
        movieUpdate,
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteMovie(req, res, next) {
    try {
      const userID = req.user._id;
      const movieID = req.params.id;
      const movie = await movieModel.findById({ _id: movieID });
      if (!movie) throw "فیلم یافت نشد";
      // if (userID == movie.insertedBy)
      //   throw { status: 400, message: "شما برای حذف این فیلم مجوز ندارید" };
      const movieDeleted = await movieModel.findByIdAndDelete({ _id: movieID });
      if (movieDeleted.deletedCount == 0) throw { status: 400, message: "پروژه حذف نشد" };
      return res.status(200).json({
        status: 200,
        success: true,
        message: "فیلم با موفقیت حذف شد",
        movieDeleted,
      });
    } catch (error) {
      next(error);
    }
  }
  async searchMovie(req, res, next) {
    try {
    } catch (error) {
      next();
    }
  }
}
module.exports = {
  MovieController: new MovieController(),
};
