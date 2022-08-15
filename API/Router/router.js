const { authRoutes } = require("./auth.router");
const { movieRoutes } = require("./movie.router");
const { userRoutes } = require("./user.router");

const router = require("express").Router();
router.use("/auth", authRoutes);
router.use("/movie", movieRoutes);
router.use("/user", userRoutes);

module.exports = {
  allRoutes: router,
};
