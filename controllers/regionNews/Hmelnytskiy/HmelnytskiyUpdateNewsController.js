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
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHmelnytskiyMethods = {
  updateHmelnytskiyNews: Hmelnytskiy,
  updateKamyanetsPodilskyNews: KamyanetsPodilsky,
  updateKrasylivNews: Krasyliv,
  updateNetishynNews: Netishyn,
  updatePolonneNews: Polonne,
  updateShepetivkaNews: Shepetivka,
  updateSlavutaNews: Slavuta,
  updateStarokostiantynivkaNews: Starokostiantynivka,
  updateVolochyskNews: Volochysk,
};

const HmelnytskiyUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionHmelnytskiyMethods)) {
  HmelnytskiyUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HmelnytskiyUpdateNewsController;
