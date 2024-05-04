import {
  Hadiach,
  HorishniPlavni,
  Kremenchuk,
  Lubny,
  Myrhorod,
  Poltava,
} from "../../../models/feeds/regionPoltava/poltavaCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionPoltavaMethods = {
  getAllHadiachNewsWithNN: Hadiach,
  getAllHorishniPlavniNewsWithNN: HorishniPlavni,
  getAllKremenchukNewsWithNN: Kremenchuk,
  getAllLubnyNewsWithNN: Lubny,
  getAllMyrhorodNewsWithNN: Myrhorod,
  getAllPoltavaNewsWithNN: Poltava,
};

const PoltavaGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionPoltavaMethods)) {
  PoltavaGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default PoltavaGetAllNewsWithNNController;
