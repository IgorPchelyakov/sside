import {
  Dolyna,
  IvanoFrankivsk,
  Kalush,
  Kolomyia,
  Nadvirna,
} from "../../../models/feeds/regionIvanoFrankivsk/ivanoFrankivskCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionIvanoFrankivskMethods = {
  getDolynaNewsByIdOrUrl: Dolyna,
  getIvanoFrankivskNewsByIdOrUrl: IvanoFrankivsk,
  getKalushNewsByIdOrUrl: Kalush,
  getKolomyiaNewsByIdOrUrl: Kolomyia,
  getNadvirnaNewsByIdOrUrl: Nadvirna,
};

const IvanoFrankivskGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionIvanoFrankivskMethods)) {
  IvanoFrankivskGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default IvanoFrankivskGetNewsByIdOrUrlController;
