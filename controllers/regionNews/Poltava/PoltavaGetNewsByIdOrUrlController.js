import {
  Hadiach,
  HorishniPlavni,
  Kremenchuk,
  Lubny,
  Myrhorod,
  Poltava,
} from "../../../models/feeds/regionPoltava/poltavaCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionPoltavaMethods = {
  getHadiachNewsByIdOrUrl: Hadiach,
  getHorishniPlavniNewsByIdOrUrl: HorishniPlavni,
  getKremenchukNewsByIdOrUrl: Kremenchuk,
  getLubnyNewsByIdOrUrl: Lubny,
  getMyrhorodNewsByIdOrUrl: Myrhorod,
  getPoltavaNewsByIdOrUrl: Poltava,
};

const PoltavaGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionPoltavaMethods)) {
  PoltavaGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default PoltavaGetNewsByIdOrUrlController;
