import {
  Kropyvnytskyi,
  Oleksandriya,
  Svitlovodsk,
  Znamianka,
} from "../../../models/feeds/regionKirovograd/kirovogradCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKirovogradMethods = {
  getAllKropyvnytskyiNews: Kropyvnytskyi,
  getAllOleksandriyaNews: Oleksandriya,
  getAllSvitlovodskNews: Svitlovodsk,
  getAllZnamiankaNews: Znamianka,
};

const KirovogradGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionKirovogradMethods)) {
  KirovogradGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KirovogradGetAllNewsController;
