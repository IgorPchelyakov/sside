import {
  Kropyvnytskyi,
  Oleksandriya,
  Svitlovodsk,
  Znamianka,
} from "../../../models/feeds/regionKirovograd/kirovogradCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKirovogradMethods = {
  deleteKropyvnytskyiNews: Kropyvnytskyi,
  deleteOleksandriyaNews: Oleksandriya,
  deleteSvitlovodskNews: Svitlovodsk,
  deleteZnamiankaNews: Znamianka,
};

const KirovogradDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionKirovogradMethods)) {
  KirovogradDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KirovogradDeleteNewsController;
