import {
  Gaysin,
  Hmilnyk,
  Koziatyn,
  Ladyzhyn,
  MohylivPodilskyi,
  Vinnytsa,
  Zhmerynka,
} from "../../../models/feeds/regionVinnytsa/vinnytsaCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVinnytsaMethods = {
  updateGaysinNews: Gaysin,
  updateHmilnykNews: Hmilnyk,
  updateKoziatynNews: Koziatyn,
  updateLadyzhynNews: Ladyzhyn,
  updateMohylivPodilskyiNews: MohylivPodilskyi,
  updateVinnytsaNews: Vinnytsa,
  updateZhmerynkaNews: Zhmerynka,
};

const VinnytsaUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionVinnytsaMethods)) {
  VinnytsaUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VinnytsaUpdateNewsController;
