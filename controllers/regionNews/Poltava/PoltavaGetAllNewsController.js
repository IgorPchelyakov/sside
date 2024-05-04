import {
  Hadiach,
  HorishniPlavni,
  Kremenchuk,
  Lubny,
  Myrhorod,
  Poltava,
} from "../../../models/feeds/regionPoltava/poltavaCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionPoltavaMethods = {
  getAllHadiachNews: Hadiach,
  getAllHorishniPlavniNews: HorishniPlavni,
  getAllKremenchukNews: Kremenchuk,
  getAllLubnyNews: Lubny,
  getAllMyrhorodNews: Myrhorod,
  getAllPoltavaNews: Poltava,
};

const PoltavaGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionPoltavaMethods)) {
  PoltavaGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default PoltavaGetAllNewsController;
