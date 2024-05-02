import newsModelNames from "../../../data/NewsModelNames.js";
import NewsModel from "../../../utils/news/newsModel.js";

// const BilgorodDnistrovsky = NewsModel("bilgorod_dnistrovskies");
// const Chornomorsk = NewsModel("chornomorsks");
// const Izmail = NewsModel("izmails");
// const Kiliya = NewsModel("kiliyas");
// const Odesa = NewsModel("odesas");
// const Podilsk = NewsModel("podilsks");
// const Teplodar = NewsModel("teplodars");
// const Youzhne = NewsModel("youzhnes");

// export {
//   BilgorodDnistrovsky,
//   Chornomorsk,
//   Izmail,
//   Kiliya,
//   Odesa,
//   Podilsk,
//   Teplodar,
//   Youzhne,
// };

const newsModels = {};

for (const [country, regions] of Object.entries(newsModelNames)) {
  newsModels[country] = {};
  for (const [region, models] of Object.entries(regions)) {
    newsModels[country][region] = {};
    for (const [modelName, modelNameValue] of Object.entries(models)) {
      newsModels[country][region][modelName] = NewsModel(modelNameValue);
    }
  }
}

export default newsModels;
