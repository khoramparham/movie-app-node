const { movieModel } = require("../Models/movie.model");

class MovieController {
  async storeMovie(req, res, next) {
    try {
      const { name, description, rate, director, Photo } = req.body;
      const movie = await movieModel.create({
        name,
        description,
        rate,
        director,
        Photo,
      });
      if (!movie)throw { status: 400, message: "افزودن فیلم با مشکل مواجه شد" };
      res.status(201).json({
        status: 201,
        success: true,
        movie,
      });
    } catch (error) {
      next(error);
    }
  }
  async getMovie(req, res, next) {}
  async editMovie(req, res, next) {}
  async deleteMovie(req, res, next) {}
  async searchMovie(req, res, next) {}
}
module.exports = {
  MovieController: new MovieController(),
};
