import {
  Gaysin,
  Hmilnyk,
  Koziatyn,
  Ladyzhyn,
  MohylivPodilskyi,
  Vinnytsa,
  Zhmerynka,
} from "../../../models/feeds/regionVinnytsa/vinnytsaCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVinnytsaMethods = {
  getAllGaysinNewsWithNN: Gaysin,
  getAllHmilnykNewsWithNN: Hmilnyk,
  getAllKoziatynNewsWithNN: Koziatyn,
  getAllLadyzhynNewsWithNN: Ladyzhyn,
  getAllMohylivPodilskyiNewsWithNN: MohylivPodilskyi,
  getAllVinnytsaNewsWithNN: Vinnytsa,
  getAllZhmerynkaNewsWithNN: Zhmerynka,
};

const VinnytsaGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionVinnytsaMethods)) {
  VinnytsaGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VinnytsaGetAllNewsWithNNController;
