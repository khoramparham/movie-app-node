require("dotenv").config();
const Application = require("./API/server");
new Application(process.env.APPLICATION_PORT, process.env.DB_URL);
