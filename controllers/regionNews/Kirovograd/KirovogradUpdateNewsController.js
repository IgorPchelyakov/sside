import {
  Kropyvnytskyi,
  Oleksandriya,
  Svitlovodsk,
  Znamianka,
} from "../../../models/feeds/regionKirovograd/kirovogradCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKirovogradMethods = {
  updateKropyvnytskyiNews: Kropyvnytskyi,
  updateOleksandriyaNews: Oleksandriya,
  updateSvitlovodskNews: Svitlovodsk,
  updateZnamiankaNews: Znamianka,
};

const KirovogradUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionKirovogradMethods)) {
  KirovogradUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KirovogradUpdateNewsController;
