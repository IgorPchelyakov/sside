import {
  Mykolaiv,
  Pervomaisk,
  Voznesensk,
  Yuzhnoukrainsk,
} from "../../../models/feeds/regionMykolayiv/mykolaivCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionMykolayivMethods = {
  getMykolaivNewsByIdOrUrl: Mykolaiv,
  getPervomaiskNewsByIdOrUrl: Pervomaisk,
  getVoznesenskNewsByIdOrUrl: Voznesensk,
  getYuzhnoukrainskNewsByIdOrUrl: Yuzhnoukrainsk,
};

const MykolayivGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionMykolayivMethods)) {
  MykolayivGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default MykolayivGetNewsByIdOrUrlController;
