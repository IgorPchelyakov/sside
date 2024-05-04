import {
  Balakliia,
  Chuguiv,
  Derhachi,
  Harkiv,
  Izium,
  Krasnohrad,
  Kupiansk,
  Lozova,
  Lubotyn,
  Merefa,
  Pervomaiskyi,
  Vovchansk,
} from "../../../models/feeds/regionHarkiv/harkivCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHarkivMethods = {
  getAllBalakliiaNewsWithNN: Balakliia,
  getAllChuguivNewsWithNN: Chuguiv,
  getAllDerhachiNewsWithNN: Derhachi,
  getAllHarkivNewsWithNN: Harkiv,
  getAllIziumNewsWithNN: Izium,
  getAllKrasnohradNewsWithNN: Krasnohrad,
  getAllKupianskNewsWithNN: Kupiansk,
  getAllLozovaNewsWithNN: Lozova,
  getAllLubotynNewsWithNN: Lubotyn,
  getAllMerefaNewsWithNN: Merefa,
  getAllPervomaiskyiNewsWithNN: Pervomaiskyi,
  getAllVovchanskNewsWithNN: Vovchansk,
};

const HarkivGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionHarkivMethods)) {
  HarkivGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HarkivGetAllNewsWithNNController;
