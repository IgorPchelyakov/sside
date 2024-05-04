import {
  Kropyvnytskyi,
  Oleksandriya,
  Svitlovodsk,
  Znamianka,
} from "../../../models/feeds/regionKirovograd/kirovogradCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKirovogradMethods = {
  getKropyvnytskyiNewsByDate: Kropyvnytskyi,
  getOleksandriyaNewsByDate: Oleksandriya,
  getSvitlovodskNewsByDate: Svitlovodsk,
  getZnamiankaNewsByDate: Znamianka,
};

const KirovogradGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionKirovogradMethods)) {
  KirovogradGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KirovogradGetNewsByDateController;
