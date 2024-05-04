import {
  Mykolaiv,
  Pervomaisk,
  Voznesensk,
  Yuzhnoukrainsk,
} from "../../../models/feeds/regionMykolayiv/mykolaivCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionMykolayivMethods = {
  searchMykolaivNews: Mykolaiv,
  searchPervomaiskNews: Pervomaisk,
  searchVoznesenskNews: Voznesensk,
  searchYuzhnoukrainskNews: Yuzhnoukrainsk,
};

const MykolayivSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionMykolayivMethods)) {
  MykolayivSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default MykolayivSearchNewsController;
