import {
  Berehove,
  Khust,
  Mukachevo,
  Uzhhorod,
  Vynohradiv,
} from "../../../models/feeds/regionZakarpatsk/zakarpatskCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZakarpatskMethods = {
  getAllBerehoveNewsWithNN: Berehove,
  getAllKhustNewsWithNN: Khust,
  getAllMukachevoNewsWithNN: Mukachevo,
  getAllUzhhorodNewsWithNN: Uzhhorod,
  getAllVynohradivNewsWithNN: Vynohradiv,
};

const ZakarpatskGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionZakarpatskMethods)) {
  ZakarpatskGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZakarpatskGetAllNewsWithNNController;
