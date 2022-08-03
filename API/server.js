const mongoose = require("mongoose");

module.exports = class Application {
  #express = require("express");
  #app = this.#express();
  constructor(PORT, DB_URL) {
    this.configDataBase(DB_URL);
    this.configApplication();
    this.createServer(PORT);
    this.createRoutes();
    this.errorHandler();
  }
  configApplication() {
    const path = require("path");
    this.#app.use(this.#express.json());
    this.#app.use(this.#express.urlencoded({ extended: true }));
    this.#app.use(this.#express.static(path.join(__dirname, "..", " public")));
  }
  createServer(PORT) {
    const http = require("http");
    const server = http.createServer(this.#app);
    server.listen(PORT, () => {
      console.log(`Server run on port : ${PORT}`);
    });
  }
  configDataBase(DB_URL) {
    mongoose.connect(DB_URL, (error) => {
      if (error) {
        throw error;
      }
      return console.log("Connect to DB successful...");
    });
  }
  errorHandler() {
    this.#app.use((req, res, next) => {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "صفحه ی مورد نظر یافت نشد",
      });
    });
    this.#app.use((err, req, res, next) => {
      const status = err?.status || 500;
      const message = err?.message || "Internal server error";
      return res.status(status).json({
        status,
        success: false,
        message,
      });
    });
  }

  createRoutes() {
    const { allRoutes } = require("./Router/router");
    this.#app.get("/", (req, res, next) => {
      return res.json({
        message: "this is a new experess app",
      });
    });
    this.#app.use((req, res, next) => {
      try {
        this.#app.use(allRoutes);
      } catch (error) {
        next(error);
      }
    });
  }
};
