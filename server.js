import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import logger from "morgan";
import sequelize from "./DBConnect.js";

import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import bannerRouter from "./routes/banners.js";
import mediaRouter from "./routes/media.js";
import newsRouter from "./routes/news.js";
import userRouter from "./routes/users.js";

import connectionRouter from "./routes/connection.js";
import countersRouter from "./routes/counters.js";
import regionARKream from "./routes/regionFeeds/regionARKream.js";
import regionCherkasyRouter from "./routes/regionFeeds/regionCherkasy.js";
import regionChernihivRouter from "./routes/regionFeeds/regionChernigiv.js";
import regionChernivtsi from "./routes/regionFeeds/regionChernivtsi.js";
import regionDniproRouter from "./routes/regionFeeds/regionDnipro.js";
import regionDonetskRouter from "./routes/regionFeeds/regionDonetsk.js";
import regionHarkivRouter from "./routes/regionFeeds/regionHarkiv.js";
import regionHmelnytskiyRouter from "./routes/regionFeeds/regionHmelnytskiy.js";
import regionIvanoFrankivskRouter from "./routes/regionFeeds/regionIvanoFrankivsk.js";
import regionKhersonRouter from "./routes/regionFeeds/regionKherson.js";
import regionKirovogradRouter from "./routes/regionFeeds/regionKirovograd.js";
import regionKyivRouter from "./routes/regionFeeds/regionKyiv.js";
import regionLuhanskRouter from "./routes/regionFeeds/regionLuhansk.js";
import regionLvivRouter from "./routes/regionFeeds/regionLviv.js";
import regionMykolaivRouter from "./routes/regionFeeds/regionMykolayiv.js";
import regionOdesaRouter from "./routes/regionFeeds/regionOdesa.js";
import regionPoltavaRouter from "./routes/regionFeeds/regionPoltava.js";
import regionRivneRouter from "./routes/regionFeeds/regionRivne.js";
import regionSumyRouter from "./routes/regionFeeds/regionSumy.js";
import regionTernopilRouter from "./routes/regionFeeds/regionTernopil.js";
import regionVinnytsaRouter from "./routes/regionFeeds/regionVinnytsa.js";
import regionVolynskRouter from "./routes/regionFeeds/regionVolynsk.js";
import regionZakarpatskRouter from "./routes/regionFeeds/regionZakarpatsk.js";
import regionZaporizhzhiaRouter from "./routes/regionFeeds/regionZaporizhzhia.js";
import regionZhytomyrRouter from "./routes/regionFeeds/regionZhytomyr.js";
import sectionNewsRouter from "./routes/sectionNews.js";

import searchRouter from "./routes/search.js";

import sitemapsRouter from "./routes/sitemaps.js";

import bannerMediaRouter from "./routes/bannerMedias.js";
import citiesRouter from "./routes/location/Cities.js";
import countriesRouter from "./routes/location/Countries.js";
import regionsRouter from "./routes/location/Regions.js";
import themesRouter from "./routes/topic.js";

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

app.use("/api", userRouter);
app.use("/api", newsRouter);
app.use("/api", mediaRouter);
app.use("/api", bannerRouter);
app.use("/api", regionARKream);
app.use("/api", regionCherkasyRouter);
app.use("/api", regionChernihivRouter);
app.use("/api", regionChernivtsi);
app.use("/api", regionDniproRouter);
app.use("/api", regionDonetskRouter);
app.use("/api", regionHarkivRouter);
app.use("/api", regionHmelnytskiyRouter);
app.use("/api", regionIvanoFrankivskRouter);
app.use("/api", regionKhersonRouter);
app.use("/api", regionKirovogradRouter);
app.use("/api", regionKyivRouter);
app.use("/api", regionLuhanskRouter);
app.use("/api", regionLvivRouter);
app.use("/api", regionMykolaivRouter);
app.use("/api", regionOdesaRouter);
app.use("/api", regionPoltavaRouter);
app.use("/api", regionRivneRouter);
app.use("/api", regionSumyRouter);
app.use("/api", regionTernopilRouter);
app.use("/api", regionVinnytsaRouter);
app.use("/api", regionVolynskRouter);
app.use("/api", regionZakarpatskRouter);
app.use("/api", regionZaporizhzhiaRouter);
app.use("/api", regionZhytomyrRouter);

app.use("/api", connectionRouter);
app.use("/api", countersRouter);
app.use("/api", sectionNewsRouter);

app.use("/api", searchRouter);

app.use("/api", sitemapsRouter);

app.use("/api", themesRouter);
app.use("/api", bannerMediaRouter);
app.use("/api", countriesRouter);
app.use("/api", regionsRouter);
app.use("/api", citiesRouter);

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
