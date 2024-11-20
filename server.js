import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fileUpload from "express-fileupload";
import logger from "morgan";
import sequelize from "./DBConnect.js";
import allRoutes from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 5656;

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(cors());
app.use(fileUpload());
app.use("/api/uploads", express.static("uploads"));

allRoutes.forEach(({ path, router }) => {
  app.use(path, router);
});

const start = () => {
  try {
    sequelize
      .authenticate()
      .then(() => {
        console.log(
          "Connection to database has been established successfully."
        );
      })
      .catch((error) => {
        console.error("Unable to connect to the database:", error);
      });

    sequelize
      .sync()
      .then(() => {
        console.log("All models were synchronized successfully.");
      })
      .catch((error) => {
        console.error(
          "An error occurred while synchronizing the models:",
          error
        );
      });

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
