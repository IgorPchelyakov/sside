import {
  Kovel,
  Lutsk,
  Novovolynsk,
  VolodymyrVolynskyi,
} from "../../../models/feeds/regionVolynsk/volynskCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVolynskMethods = {
  getAllKovelNews: Kovel,
  getAllLutskNews: Lutsk,
  getAllNovovolynskNews: Novovolynsk,
  getAllVolodymyrVolynskyiNews: VolodymyrVolynskyi,
};

const VolynskGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionVolynskMethods)) {
  VolynskGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VolynskGetAllNewsController;
