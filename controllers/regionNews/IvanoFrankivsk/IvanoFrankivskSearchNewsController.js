import {
  Dolyna,
  IvanoFrankivsk,
  Kalush,
  Kolomyia,
  Nadvirna,
} from "../../../models/feeds/regionIvanoFrankivsk/ivanoFrankivskCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionIvanoFrankivskMethods = {
  searchDolynaNews: Dolyna,
  searchIvanoFrankivskNews: IvanoFrankivsk,
  searchKalushNews: Kalush,
  searchKolomyiaNews: Kolomyia,
  searchNadvirnaNews: Nadvirna,
};

const IvanoFrankivskSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionIvanoFrankivskMethods)) {
  IvanoFrankivskSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default IvanoFrankivskSearchNewsController;
