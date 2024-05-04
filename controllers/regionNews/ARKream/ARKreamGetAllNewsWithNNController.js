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
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionARKreamMethods = {
  getAllAlushtaNewsWithNN: Alushta,
  getAllArmyanskNewsWithNN: Armyansk,
  getAllBachchisarayNewsWithNN: Bachchisaray,
  getAllDzhankoyNewsWithNN: Dzhankoy,
  getAllFeodosiaNewsWithNN: Feodosia,
  getAllKerchNewsWithNN: Kerch,
  getAllKrasnoperekopskNewsWithNN: Krasnoperekopsk,
  getAllSakyNewsWithNN: Saky,
  getAllSimferopolNewsWithNN: Simferopol,
  getAllYaltaNewsWithNN: Yalta,
  getAllYevpatoriaNewsWithNN: Yevpatoria,
};

const ARKreamGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionARKreamMethods)) {
  ARKreamGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ARKreamGetAllNewsWithNNController;
