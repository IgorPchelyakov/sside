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
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionARKreamMethods = {
  getAllAlushtaNews: Alushta,
  getAllArmyanskNews: Armyansk,
  getAllBachchisarayNews: Bachchisaray,
  getAllDzhankoyNews: Dzhankoy,
  getAllFeodosiaNews: Feodosia,
  getAllKerchNews: Kerch,
  getAllKrasnoperekopskNews: Krasnoperekopsk,
  getAllSakyNews: Saky,
  getAllSimferopolNews: Simferopol,
  getAllYaltaNews: Yalta,
  getAllYevpatoriaNews: Yevpatoria,
};

const ARKreamGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionARKreamMethods)) {
  ARKreamGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ARKreamGetAllNewsController;
