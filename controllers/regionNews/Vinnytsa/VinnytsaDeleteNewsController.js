import {
  Gaysin,
  Hmilnyk,
  Koziatyn,
  Ladyzhyn,
  MohylivPodilskyi,
  Vinnytsa,
  Zhmerynka,
} from "../../../models/feeds/regionVinnytsa/vinnytsaCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVinnytsaMethods = {
  deleteVinnytsaNews: Vinnytsa,
  deleteZhmerynkaNews: Zhmerynka,
  deleteMohylivPodilskyiNews: MohylivPodilskyi,
  deleteKoziatynNews: Koziatyn,
  deleteGaysinNews: Gaysin,
  deleteHmilnykNews: Hmilnyk,
  deleteLadyzhynNews: Ladyzhyn,
};

const VinnytsaDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionVinnytsaMethods)) {
  VinnytsaDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VinnytsaDeleteNewsController;
