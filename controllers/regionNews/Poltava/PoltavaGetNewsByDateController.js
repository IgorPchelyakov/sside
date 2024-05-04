import {
  Hadiach,
  HorishniPlavni,
  Kremenchuk,
  Lubny,
  Myrhorod,
  Poltava,
} from "../../../models/feeds/regionPoltava/poltavaCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionPoltavaMethods = {
  getHadiachNewsByDate: Hadiach,
  getHorishniPlavniNewsByDate: HorishniPlavni,
  getKremenchukNewsByDate: Kremenchuk,
  getLubnyNewsByDate: Lubny,
  getMyrhorodNewsByDate: Myrhorod,
  getPoltavaNewsByDate: Poltava,
};

const PoltavaGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionPoltavaMethods)) {
  PoltavaGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default PoltavaGetNewsByDateController;
