import {
  Dolyna,
  IvanoFrankivsk,
  Kalush,
  Kolomyia,
  Nadvirna,
} from "../../../models/feeds/regionIvanoFrankivsk/ivanoFrankivskCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionIvanoFrankivskMethods = {
  getDolynaNewsByDate: Dolyna,
  getIvanoFrankivskNewsByDate: IvanoFrankivsk,
  getKalushNewsByDate: Kalush,
  getKolomyiaNewsByDate: Kolomyia,
  getNadvirnaNewsByDate: Nadvirna,
};

const IvanoFrankivskGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionIvanoFrankivskMethods)) {
  IvanoFrankivskGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default IvanoFrankivskGetNewsByDateController;
