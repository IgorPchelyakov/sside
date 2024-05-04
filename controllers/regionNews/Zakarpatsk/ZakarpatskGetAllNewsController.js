import {
  Berehove,
  Khust,
  Mukachevo,
  Uzhhorod,
  Vynohradiv,
} from "../../../models/feeds/regionZakarpatsk/zakarpatskCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZakarpatskMethods = {
  getAllBerehoveNews: Berehove,
  getAllKhustNews: Khust,
  getAllMukachevoNews: Mukachevo,
  getAllUzhhorodNews: Uzhhorod,
  getAllVynohradivNews: Vynohradiv,
};

const ZakarpatskGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionZakarpatskMethods)) {
  ZakarpatskGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZakarpatskGetAllNewsController;
