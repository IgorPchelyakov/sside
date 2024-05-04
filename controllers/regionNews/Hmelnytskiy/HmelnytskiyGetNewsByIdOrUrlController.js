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
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHmelnytskiyMethods = {
  getHmelnytskiyNewsByIdOrUrl: Hmelnytskiy,
  getKamyanetsPodilskyNewsByIdOrUrl: KamyanetsPodilsky,
  getKrasylivNewsByIdOrUrl: Krasyliv,
  getNetishynNewsByIdOrUrl: Netishyn,
  getPolonneNewsByIdOrUrl: Polonne,
  getShepetivkaNewsByIdOrUrl: Shepetivka,
  getSlavutaNewsByIdOrUrl: Slavuta,
  getStarokostiantynivkaNewsByIdOrUrl: Starokostiantynivka,
  getVolochyskNewsByIdOrUrl: Volochysk,
};

const HmelnytskiyGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionHmelnytskiyMethods)) {
  HmelnytskiyGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HmelnytskiyGetNewsByIdOrUrlController;
