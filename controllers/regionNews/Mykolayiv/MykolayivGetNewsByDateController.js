import {
  Mykolaiv,
  Pervomaisk,
  Voznesensk,
  Yuzhnoukrainsk,
} from "../../../models/feeds/regionMykolayiv/mykolaivCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionMykolayivMethods = {
  getMykolaivNewsByDate: Mykolaiv,
  getPervomaiskNewsByDate: Pervomaisk,
  getVoznesenskNewsByDate: Voznesensk,
  getYuzhnoukrainskNewsByDate: Yuzhnoukrainsk,
};

const MykolayivGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionMykolayivMethods)) {
  MykolayivGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default MykolayivGetNewsByDateController;
