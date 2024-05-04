import {
  Genichesk,
  Kakhovka,
  Kherson,
  NovaKakhovka,
  Oleshky,
  Skadovsk,
} from "../../../models/feeds/regionKherson/khersonCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKhersonMethods = {
  getAllGenicheskNewsWithNN: Genichesk,
  getAllKakhovkaNewsWithNN: Kakhovka,
  getAllKhersonNewsWithNN: Kherson,
  getAllNovaKakhovkaNewsWithNN: NovaKakhovka,
  getAllOleshkyNewsWithNN: Oleshky,
  getAllSkadovskNewsWithNN: Skadovsk,
};

const KhersonGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionKhersonMethods)) {
  KhersonGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KhersonGetAllNewsWithNNController;
