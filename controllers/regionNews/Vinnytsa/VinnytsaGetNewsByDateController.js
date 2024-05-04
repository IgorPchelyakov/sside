import {
  Gaysin,
  Hmilnyk,
  Koziatyn,
  Ladyzhyn,
  MohylivPodilskyi,
  Vinnytsa,
  Zhmerynka,
} from "../../../models/feeds/regionVinnytsa/vinnytsaCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVinnytsaMethods = {
  getGaysinNewsByDate: Gaysin,
  getHmilnykNewsByDate: Hmilnyk,
  getKoziatynNewsByDate: Koziatyn,
  getLadyzhynNewsByDate: Ladyzhyn,
  getMohylivPodilskyiNewsByDate: MohylivPodilskyi,
  getVinnytsaNewsByDate: Vinnytsa,
  getZhmerynkaNewsByDate: Zhmerynka,
};

const VinnytsaGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionVinnytsaMethods)) {
  VinnytsaGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VinnytsaGetNewsByDateController;
