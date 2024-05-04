import {
  Alushta,
  Armyansk,
  Bachchisaray,
  Dzhankoy,
  Feodosia,
  Kerch,
  Krasnoperekopsk,
  Saky,
  Simferopol,
  Yalta,
  Yevpatoria,
} from "../../../models/feeds/regionARKream/arKreamCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionARKreamMethods = {
  getAlushtaNewsByDate: Alushta,
  getArmyanskNewsByDate: Armyansk,
  getBachchisarayNewsByDate: Bachchisaray,
  getDzhankoyNewsByDate: Dzhankoy,
  getFeodosiaNewsByDate: Feodosia,
  getKerchNewsByDate: Kerch,
  getKrasnoperekopskNewsByDate: Krasnoperekopsk,
  getSakyNewsByDate: Saky,
  getSimferopolNewsByDate: Simferopol,
  getYaltaNewsByDate: Yalta,
  getYevpatoriaNewsByDate: Yevpatoria,
};

const ARKreamGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionARKreamMethods)) {
  ARKreamGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ARKreamGetNewsByDateController;
