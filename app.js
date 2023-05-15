const express = require("express");
require("dotenv").config({ path: "./config.env" });
require("./utils/sync");

const app = express();
const { sequelize } = require("./models");
const { createArtist } = require("./utils/controllers");

app.use(require("body-parser").json());
app.use(require("cors")());

app.post("/api", createArtist);

const server = app.listen(process.env.PORT, async () => {
  await sequelize.authenticate();
  console.log(`Connected to DB and listening on port ${process.env.PORT}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
