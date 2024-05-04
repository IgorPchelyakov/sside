import {
  Gaysin,
  Hmilnyk,
  Koziatyn,
  Ladyzhyn,
  MohylivPodilskyi,
  Vinnytsa,
  Zhmerynka,
} from "../../../models/feeds/regionVinnytsa/vinnytsaCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVinnytsaMethods = {
  getAllGaysinNews: Gaysin,
  getAllHmilnykNews: Hmilnyk,
  getAllKoziatynNews: Koziatyn,
  getAllLadyzhynNews: Ladyzhyn,
  getAllMohylivPodilskyiNews: MohylivPodilskyi,
  getAllVinnytsaNews: Vinnytsa,
  getAllZhmerynkaNews: Zhmerynka,
};

const VinnytsaGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionVinnytsaMethods)) {
  VinnytsaGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VinnytsaGetAllNewsController;
