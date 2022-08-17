require("dotenv").config();
const Application = require("./API/server");
const DB_URL = "mongodb://localhost:27017/MovieAppDB";
new Application(3000, DB_URL);
