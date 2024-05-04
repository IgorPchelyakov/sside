import {
  Kropyvnytskyi,
  Oleksandriya,
  Svitlovodsk,
  Znamianka,
} from "../../../models/feeds/regionKirovograd/kirovogradCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKirovogradMethods = {
  getKropyvnytskyiNewsByIdOrUrl: Kropyvnytskyi,
  getOleksandriyaNewsByIdOrUrl: Oleksandriya,
  getSvitlovodskNewsByIdOrUrl: Svitlovodsk,
  getZnamiankaNewsByIdOrUrl: Znamianka,
};

const KirovogradGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionKirovogradMethods)) {
  KirovogradGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KirovogradGetNewsByIdOrUrlController;
