import {
  Berehove,
  Khust,
  Mukachevo,
  Uzhhorod,
  Vynohradiv,
} from "../../../models/feeds/regionZakarpatsk/zakarpatskCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZakarpatskMethods = {
  getBerehoveNewsByIdOrUrl: Berehove,
  getKhustNewsByIdOrUrl: Khust,
  getMukachevoNewsByIdOrUrl: Mukachevo,
  getUzhhorodNewsByIdOrUrl: Uzhhorod,
  getVynohradivNewsByIdOrUrl: Vynohradiv,
};

const ZakarpatskGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionZakarpatskMethods)) {
  ZakarpatskGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZakarpatskGetNewsByIdOrUrlController;
