import {
  Mykolaiv,
  Pervomaisk,
  Voznesensk,
  Yuzhnoukrainsk,
} from "../../../models/feeds/regionMykolayiv/mykolaivCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionMykolayivMethods = {
  deleteMykolaivNews: Mykolaiv,
  deleteVoznesenskNews: Voznesensk,
  deletePervomaiskNews: Pervomaisk,
  deleteYuzhnoukrainskNews: Yuzhnoukrainsk,
};

const MykolayivDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionMykolayivMethods)) {
  MykolayivDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default MykolayivDeleteNewsController;
