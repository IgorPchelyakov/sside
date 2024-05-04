import {
  Hadiach,
  HorishniPlavni,
  Kremenchuk,
  Lubny,
  Myrhorod,
  Poltava,
} from "../../../models/feeds/regionPoltava/poltavaCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionPoltavaMethods = {
  deletePoltavaNews: Poltava,
  deleteKremenchukNews: Kremenchuk,
  deleteLubnyNews: Lubny,
  deleteHorishniPlavniNews: HorishniPlavni,
  deleteMyrhorodNews: Myrhorod,
  deleteHadiachNews: Hadiach,
};

const PoltavaDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionPoltavaMethods)) {
  PoltavaDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default PoltavaDeleteNewsController;
