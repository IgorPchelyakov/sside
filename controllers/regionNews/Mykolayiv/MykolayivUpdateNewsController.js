import {
  Mykolaiv,
  Pervomaisk,
  Voznesensk,
  Yuzhnoukrainsk,
} from "../../../models/feeds/regionMykolayiv/mykolaivCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionMykolayivMethods = {
  updateMykolaivNews: Mykolaiv,
  updateVoznesenskNews: Voznesensk,
  updatePervomaiskNews: Pervomaisk,
  updateYuzhnoukrainskNews: Yuzhnoukrainsk,
};

const MykolayivUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionMykolayivMethods)) {
  MykolayivUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default MykolayivUpdateNewsController;
