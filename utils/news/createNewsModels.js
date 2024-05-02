import NewsModel from "./newsModel.js";

const createNewsModels = (newsModelNames) => {
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

  return newsModels;
};

export default createNewsModels;
