import {
  Kropyvnytskyi,
  Oleksandriya,
  Svitlovodsk,
  Znamianka,
} from "../../../models/feeds/regionKirovograd/kirovogradCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKirovogradMethods = {
  getAllKropyvnytskyiNewsWithNN: Kropyvnytskyi,
  getAllOleksandriyaNewsWithNN: Oleksandriya,
  getAllSvitlovodskNewsWithNN: Svitlovodsk,
  getAllZnamiankaNewsWithNN: Znamianka,
};

const KirovogradGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionKirovogradMethods)) {
  KirovogradGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KirovogradGetAllNewsWithNNController;
