import {
  Kropyvnytskyi,
  Oleksandriya,
  Svitlovodsk,
  Znamianka,
} from "../../../models/feeds/regionKirovograd/kirovogradCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKirovogradMethods = {
  searchKropyvnytskyiNews: Kropyvnytskyi,
  searchOleksandriyaNews: Oleksandriya,
  searchSvitlovodskNews: Svitlovodsk,
  searchZnamiankaNews: Znamianka,
};

const KirovogradSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionKirovogradMethods)) {
  KirovogradSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KirovogradSearchNewsController;
