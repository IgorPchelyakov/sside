import {
  Gaysin,
  Hmilnyk,
  Koziatyn,
  Ladyzhyn,
  MohylivPodilskyi,
  Vinnytsa,
  Zhmerynka,
} from "../../../models/feeds/regionVinnytsa/vinnytsaCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVinnytsaMethods = {
  getGaysinNewsByIdOrUrl: Gaysin,
  getHmilnykNewsByIdOrUrl: Hmilnyk,
  getKoziatynNewsByIdOrUrl: Koziatyn,
  getLadyzhynNewsByIdOrUrl: Ladyzhyn,
  getMohylivPodilskyiNewsByIdOrUrl: MohylivPodilskyi,
  getVinnytsaNewsByIdOrUrl: Vinnytsa,
  getZhmerynkaNewsByIdOrUrl: Zhmerynka,
};

const VinnytsaGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionVinnytsaMethods)) {
  VinnytsaGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VinnytsaGetNewsByIdOrUrlController;
