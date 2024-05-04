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
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionARKreamMethods = {
  searchAlushtaNews: Alushta,
  searchArmyanskNews: Armyansk,
  searchBachchisarayNews: Bachchisaray,
  searchDzhankoyNews: Dzhankoy,
  searchFeodosiaNews: Feodosia,
  searchKerchNews: Kerch,
  searchKrasnoperekopskNews: Krasnoperekopsk,
  searchSakyNews: Saky,
  searchSimferopolNews: Simferopol,
  searchYaltaNews: Yalta,
  searchYevpatoriaNews: Yevpatoria,
};

const ARKreamSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionARKreamMethods)) {
  ARKreamSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ARKreamSearchNewsController;
