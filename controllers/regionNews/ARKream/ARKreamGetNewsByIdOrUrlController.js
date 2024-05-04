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
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionARKreamMethods = {
  getAlushtaNewsByIdOrUrl: Alushta,
  getArmyanskNewsByIdOrUrl: Armyansk,
  getBachchisarayNewsByIdOrUrl: Bachchisaray,
  getDzhankoyNewsByIdOrUrl: Dzhankoy,
  getFeodosiaNewsByIdOrUrl: Feodosia,
  getKerchNewsByIdOrUrl: Kerch,
  getKrasnoperekopskNewsByIdOrUrl: Krasnoperekopsk,
  getSakyNewsByIdOrUrl: Saky,
  getSimferopolNewsByIdOrUrl: Simferopol,
  getYaltaNewsByIdOrUrl: Yalta,
  getYevpatoriaNewsByIdOrUrl: Yevpatoria,
};

const ARKreamGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionARKreamMethods)) {
  ARKreamGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ARKreamGetNewsByIdOrUrlController;
