import {
  Boryslav,
  Brody,
  Chervonograd,
  Dragobych,
  Lviv,
  Novoiavorivsk,
  NovyiRozdil,
  Sambir,
  Sokal,
  Stebnyk,
  Stryi,
  Truskavets,
  Zolochiv,
} from "../../../models/feeds/regionLviv/lvivCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLvivMethods = {
  getAllBoryslavNewsWithNN: Boryslav,
  getAllBrodyNewsWithNN: Brody,
  getAllChervonogradNewsWithNN: Chervonograd,
  getAllDragobychNewsWithNN: Dragobych,
  getAllLvivNewsWithNN: Lviv,
  getAllNovoiavorivskNewsWithNN: Novoiavorivsk,
  getAllNovyiRozdilNewsWithNN: NovyiRozdil,
  getAllSambirNewsWithNN: Sambir,
  getAllSokalNewsWithNN: Sokal,
  getAllStebnykNewsWithNN: Stebnyk,
  getAllStryiNewsWithNN: Stryi,
  getAllTruskavetsNewsWithNN: Truskavets,
  getAllZolochivNewsWithNN: Zolochiv,
};

const LvivGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionLvivMethods)) {
  LvivGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LvivGetAllNewsWithNNController;
