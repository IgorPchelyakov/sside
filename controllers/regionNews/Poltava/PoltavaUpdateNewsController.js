import {
  Hadiach,
  HorishniPlavni,
  Kremenchuk,
  Lubny,
  Myrhorod,
  Poltava,
} from "../../../models/feeds/regionPoltava/poltavaCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionPoltavaMethods = {
  updateHadiachNews: Hadiach,
  updateHorishniPlavniNews: HorishniPlavni,
  updateKremenchukNews: Kremenchuk,
  updateLubnyNews: Lubny,
  updateMyrhorodNews: Myrhorod,
  updatePoltavaNews: Poltava,
};

const PoltavaUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionPoltavaMethods)) {
  PoltavaUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default PoltavaUpdateNewsController;
