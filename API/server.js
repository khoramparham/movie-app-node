const mongoose = require("mongoose");
const path = require("path");

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
    this.#app.use(this.#express.json());
    this.#app.use(this.#express.urlencoded({ extended: true }));
    // this.#app.use(this.#express.static(path.join(__dirname, "..", " public")))
  }
  createServer(PORT) {
    const http = require("http");
    const server = http.createServer(this.#app);
    server.listen(PORT, () => {
      console.log(`Server run in port : ${PORT}`);
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
    this.#app.use((error, req, res, next) => {
      const status = error?.status || 500;
      const message = error?.message || "Internal server error";
      return res.status(status).json({
        status,
        success: false,
        message,
      });
    });
  }
  
  createRoutes() {
    this.#app.get("/", (res, req, next) => {
      return res.status(200).json({
        message: "this is a new experess app",
      });
    });
  }
};
