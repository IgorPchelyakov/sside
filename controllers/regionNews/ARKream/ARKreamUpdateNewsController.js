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
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionARKreamMethods = {
  updateAlushtaNews: Alushta,
  updateArmyanskNews: Armyansk,
  updateBachchisarayNews: Bachchisaray,
  updateDzhankoyNews: Dzhankoy,
  updateFeodosiaNews: Feodosia,
  updateKerchNews: Kerch,
  updateKrasnoperekopskNews: Krasnoperekopsk,
  updateSakyNews: Saky,
  updateSimferopolNews: Simferopol,
  updateYaltaNews: Yalta,
  updateYevpatoriaNews: Yevpatoria,
};

const ARKreamUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionARKreamMethods)) {
  ARKreamUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ARKreamUpdateNewsController;
