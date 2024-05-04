import {
  Kovel,
  Lutsk,
  Novovolynsk,
  VolodymyrVolynskyi,
} from "../../../models/feeds/regionVolynsk/volynskCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVolynskMethods = {
  getAllKovelNewsWithNN: Kovel,
  getAllLutskNewsWithNN: Lutsk,
  getAllNovovolynskNewsWithNN: Novovolynsk,
  getAllVolodymyrVolynskyiNewsWithNN: VolodymyrVolynskyi,
};

const VolynskGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionVolynskMethods)) {
  VolynskGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VolynskGetAllNewsWithNNController;
