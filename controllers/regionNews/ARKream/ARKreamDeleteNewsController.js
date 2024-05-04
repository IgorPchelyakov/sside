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
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionARKreamMethods = {
  deleteSimferopolNews: Simferopol,
  deleteKerchNews: Kerch,
  deleteYevpatoriaNews: Yevpatoria,
  deleteYaltaNews: Yalta,
  deleteFeodosiaNews: Feodosia,
  deleteDzhankoyNews: Dzhankoy,
  deleteKrasnoperekopskNews: Krasnoperekopsk,
  deleteAlushtaNews: Alushta,
  deleteSakyNews: Saky,
  deleteArmyanskNews: Armyansk,
  deleteBachchisarayNews: Bachchisaray,
};

const ARKreamDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionARKreamMethods)) {
  ARKreamDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ARKreamDeleteNewsController;
