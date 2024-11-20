import bannerMediaRouter from "./bannerMedias.js";
import bannerRouter from "./banners.js";
import countersRouter from "./counters.js";
import citiesRouter from "./location/Cities.js";
import countriesRouter from "./location/Countries.js";
import regionsRouter from "./location/Regions.js";
import mediaRouter from "./media.js";
import newsRouter from "./news.js";
import searchRouter from "./search.js";
import sectionNewsRouter from "./sectionNews.js";
import sitemapsRouter from "./sitemaps.js";
import topicsRouter from "./topic.js";
import userRouter from "./users.js";

const allRoutes = [
  { path: "/api", router: bannerRouter },
  { path: "/api", router: countersRouter },
  { path: "/api", router: mediaRouter },
  { path: "/api", router: newsRouter },
  { path: "/api", router: topicsRouter },
  { path: "/api", router: userRouter },
  { path: "/api", router: citiesRouter },
  { path: "/api", router: countriesRouter },
  { path: "/api", router: regionsRouter },
  { path: "/api", router: bannerMediaRouter },
  { path: "/api", router: sitemapsRouter },
  { path: "/api", router: searchRouter },
  { path: "/api", router: sectionNewsRouter },
];

export default allRoutes;
