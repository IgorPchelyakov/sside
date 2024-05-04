import {
  Hadiach,
  HorishniPlavni,
  Kremenchuk,
  Lubny,
  Myrhorod,
  Poltava,
} from "../../../models/feeds/regionPoltava/poltavaCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionPoltavaMethods = {
  searchHadiachNews: Hadiach,
  searchHorishniPlavniNews: HorishniPlavni,
  searchKremenchukNews: Kremenchuk,
  searchLubnyNews: Lubny,
  searchMyrhorodNews: Myrhorod,
  searchPoltavaNews: Poltava,
};

const PoltavaSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionPoltavaMethods)) {
  PoltavaSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default PoltavaSearchNewsController;
