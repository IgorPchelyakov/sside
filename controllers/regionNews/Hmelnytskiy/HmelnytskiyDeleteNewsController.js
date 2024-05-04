import {
  Hmelnytskiy,
  KamyanetsPodilsky,
  Krasyliv,
  Netishyn,
  Polonne,
  Shepetivka,
  Slavuta,
  Starokostiantynivka,
  Volochysk,
} from "../../../models/feeds/regionHmelnytskiy/hmelnytskiyCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHmelnytskiyMethods = {
  deleteHmelnytskiyNews: Hmelnytskiy,
  deleteKamyanetsPodilskyNews: KamyanetsPodilsky,
  deleteShepetivkaNews: Shepetivka,
  deleteStarokostiantynivkaNews: Starokostiantynivka,
  deleteSlavutaNews: Slavuta,
  deleteNetishynNews: Netishyn,
  deletePolonneNews: Polonne,
  deleteVolochyskNews: Volochysk,
  deleteKrasylivNews: Krasyliv,
};

const HmelnytskiyDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionHmelnytskiyMethods)) {
  HmelnytskiyDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HmelnytskiyDeleteNewsController;
