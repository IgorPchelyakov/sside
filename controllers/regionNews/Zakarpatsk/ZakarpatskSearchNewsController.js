import {
  Berehove,
  Khust,
  Mukachevo,
  Uzhhorod,
  Vynohradiv,
} from "../../../models/feeds/regionZakarpatsk/zakarpatskCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZakarpatskMethods = {
  searchBerehoveNews: Berehove,
  searchKhustNews: Khust,
  searchMukachevoNews: Mukachevo,
  searchUzhhorodNews: Uzhhorod,
  searchVynohradivNews: Vynohradiv,
};

const ZakarpatskSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionZakarpatskMethods)) {
  ZakarpatskSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZakarpatskSearchNewsController;
