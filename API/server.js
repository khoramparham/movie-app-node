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
      if (error) throw error.message;
      return console.log("Connect to DB successful...");
    });
    mongoose.connection.on("connected", () => {
      console.log("mongoose connected to mongodb");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("mongoose connection is disconnected");
    });
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("mongoose disconnected");
      process.exit(0);
    });
  }
  configApplication() {
    // app config
    const path = require("path");
    this.#app.use(this.#express.static(path.join(__dirname, "..", "public")));
    this.#app.use(this.#express.json());
    this.#app.use(this.#express.urlencoded({ extended: true }));
    // swagger config
    const swaggerUI = require("swagger-ui-express");
    const swaggerJsdoc = require("swagger-jsdoc");
    this.#app.use(
      "/api-doc",
      swaggerUI.serve,
      swaggerUI.setup(
        swaggerJsdoc({
          swaggerDefinition: {
            info: {
              title: "Express API for movie app ",
              version: "1.0.0",
              description: "This is a REST API application made with Express.",
            },
            contact: {
              name: "parham khoram",
              url: "https://www.linkedin.com/in/parhamkhoram",
            },
            servers: [
              {
                url: "http://localhost:3000",
              },
            ],
          },
          apis: ["./API/Router/*.router.js"],
        })
        )
        );
        // morgran config
        const morgan = require("morgan");
        this.#app.use(morgan("dev"));
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
