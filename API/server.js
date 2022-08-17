
module.exports = class Application {
  #express = require("express");
  #app = this.#express();
  constructor(PORT, DB_URL) {
    this.configDataBase(DB_URL);
    this.configApplication();
    this.createRoutes();
    this.createServer(PORT);
    this.errorHandler();
  }
  configDataBase(DB_URL) {
    const mongoose = require("mongoose");
    mongoose.connect(DB_URL, (error) => {
      if (error) {
        throw error;
      }
      return console.log("Connect to DB successful...");
    });
  }
  configApplication() {
    const path = require("path");
    this.#app.use(this.#express.static(path.join(__dirname, "..", " public")));
    this.#app.use(this.#express.json());
    this.#app.use(this.#express.urlencoded({ extended: true }));
  }
  createRoutes() {
    const { allRoutes } = require("./Router/router");
    this.#app.get("/", (req, res, next) => {
      return res.json({
        message: "this is a new experess app",
      });
    });
    this.#app.use(allRoutes);
  }
  createServer(PORT) {
    const http = require("http");
    const server = http.createServer(this.#app);
    server.listen(PORT, () => {
      console.log(`Server run on port : ${PORT}`);
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
};
