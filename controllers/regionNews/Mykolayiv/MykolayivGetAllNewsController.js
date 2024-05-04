import {
  Mykolaiv,
  Pervomaisk,
  Voznesensk,
  Yuzhnoukrainsk,
} from "../../../models/feeds/regionMykolayiv/mykolaivCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionMykolayivMethods = {
  getAllMykolaivNews: Mykolaiv,
  getAllPervomaiskNews: Pervomaisk,
  getAllVoznesenskNews: Voznesensk,
  getAllYuzhnoukrainskNews: Yuzhnoukrainsk,
};

const MykolayivGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionMykolayivMethods)) {
  MykolayivGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default MykolayivGetAllNewsController;
