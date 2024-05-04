import {
  Dolyna,
  IvanoFrankivsk,
  Kalush,
  Kolomyia,
  Nadvirna,
} from "../../../models/feeds/regionIvanoFrankivsk/ivanoFrankivskCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionIvanoFrankivskMethods = {
  deleteIvanoFrankivskNews: IvanoFrankivsk,
  deleteKalushNews: Kalush,
  deleteKolomyiaNews: Kolomyia,
  deleteDolynaNews: Dolyna,
  deleteNadvirnaNews: Nadvirna,
};

const IvanoFrankivskDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionIvanoFrankivskMethods)) {
  IvanoFrankivskDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default IvanoFrankivskDeleteNewsController;
