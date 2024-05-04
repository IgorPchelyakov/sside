import {
  Berehove,
  Khust,
  Mukachevo,
  Uzhhorod,
  Vynohradiv,
} from "../../../models/feeds/regionZakarpatsk/zakarpatskCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZakarpatskMethods = {
  getBerehoveNewsByDate: Berehove,
  getKhustNewsByDate: Khust,
  getMukachevoNewsByDate: Mukachevo,
  getUzhhorodNewsByDate: Uzhhorod,
  getVynohradivNewsByDate: Vynohradiv,
};

const ZakarpatskGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionZakarpatskMethods)) {
  ZakarpatskGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZakarpatskGetNewsByDateController;
