const { authRoutes } = require("./auth");
const { movieRoutes } = require("./movie.router");
const { userRoutes } = require("./user.router");

const router = require("express").Router();

router.use("/user", userRoutes);
router.use("/movie", movieRoutes);
router.use("/auth", authRoutes);

module.exports = {
  allRoutes: router,
};
