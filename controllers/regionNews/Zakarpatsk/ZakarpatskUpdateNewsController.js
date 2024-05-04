import {
  Berehove,
  Khust,
  Mukachevo,
  Uzhhorod,
  Vynohradiv,
} from "../../../models/feeds/regionZakarpatsk/zakarpatskCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZakarpatskMethods = {
  updateBerehoveNews: Berehove,
  updateKhustNews: Khust,
  updateMukachevoNews: Mukachevo,
  updateUzhhorodNews: Uzhhorod,
  updateVynohradivNews: Vynohradiv,
};

const ZakarpatskUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionZakarpatskMethods)) {
  ZakarpatskUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZakarpatskUpdateNewsController;
