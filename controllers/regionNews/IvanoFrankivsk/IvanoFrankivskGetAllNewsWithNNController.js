import {
  Dolyna,
  IvanoFrankivsk,
  Kalush,
  Kolomyia,
  Nadvirna,
} from "../../../models/feeds/regionIvanoFrankivsk/ivanoFrankivskCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionIvanoFrankivskMethods = {
  getAllDolynaNewsWithNN: Dolyna,
  getAllIvanoFrankivskNewsWithNN: IvanoFrankivsk,
  getAllKalushNewsWithNN: Kalush,
  getAllKolomyiaNewsWithNN: Kolomyia,
  getAllNadvirnaNewsWithNN: Nadvirna,
};

const IvanoFrankivskGetNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionIvanoFrankivskMethods)) {
  IvanoFrankivskGetNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default IvanoFrankivskGetNewsWithNNController;
