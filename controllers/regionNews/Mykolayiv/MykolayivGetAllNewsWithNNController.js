import {
  Mykolaiv,
  Pervomaisk,
  Voznesensk,
  Yuzhnoukrainsk,
} from "../../../models/feeds/regionMykolayiv/mykolaivCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionMykolayivMethods = {
  getAllMykolaivNewsWithNN: Mykolaiv,
  getAllPervomaiskNewsWithNN: Pervomaisk,
  getAllVoznesenskNewsWithNN: Voznesensk,
  getAllYuzhnoukrainskNewsWithNN: Yuzhnoukrainsk,
};

const MykolayivGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionMykolayivMethods)) {
  MykolayivGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default MykolayivGetAllNewsWithNNController;
