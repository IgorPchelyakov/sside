import {
  Dolyna,
  IvanoFrankivsk,
  Kalush,
  Kolomyia,
  Nadvirna,
} from "../../../models/feeds/regionIvanoFrankivsk/ivanoFrankivskCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionIvanoFrankivskMethods = {
  updateDolynaNews: Dolyna,
  updateIvanoFrankivskNews: IvanoFrankivsk,
  updateKalushNews: Kalush,
  updateKolomyiaNews: Kolomyia,
  updateNadvirnaNews: Nadvirna,
};

const IvanoFrankivskUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionIvanoFrankivskMethods)) {
  IvanoFrankivskUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default IvanoFrankivskUpdateNewsController;
