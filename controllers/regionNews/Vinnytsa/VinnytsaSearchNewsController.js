import {
  Gaysin,
  Hmilnyk,
  Koziatyn,
  Ladyzhyn,
  MohylivPodilskyi,
  Vinnytsa,
  Zhmerynka,
} from "../../../models/feeds/regionVinnytsa/vinnytsaCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVinnytsaMethods = {
  searchGaysinNews: Gaysin,
  searchHmilnykNews: Hmilnyk,
  searchKoziatynNews: Koziatyn,
  searchLadyzhynNews: Ladyzhyn,
  searchMohylivPodilskyiNews: MohylivPodilskyi,
  searchVinnytsaNews: Vinnytsa,
  searchZhmerynkaNews: Zhmerynka,
};

const VinnytsaSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionVinnytsaMethods)) {
  VinnytsaSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VinnytsaSearchNewsController;
