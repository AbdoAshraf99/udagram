import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";
import { V0_FEED_MODELS, V0_USER_MODELS } from "./controllers/v0/model.index";
import { sequelize } from "./sequelize";
import { appendFile } from "fs";

(async () => {
  dotenv.config();
  sequelize.authenticate().then(async() => {
    await sequelize.addModels(V0_FEED_MODELS);
    await sequelize.addModels(V0_USER_MODELS);
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  
  await sequelize.sync();

  const app = express();
   const port = process.env.PORT || 8080;
  //const port =  8080;
  app.use(bodyParser.json());

  app.use(cors());

  app.use("/api/v0/", IndexRouter);

  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/api/v0/");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running ${port}`);
    console.log(`press CTRL+C to stop server`);
  });
}
)();
