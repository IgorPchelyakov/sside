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
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHmelnytskiyMethods = {
  getHmelnytskiyNewsByDate: Hmelnytskiy,
  getKamyanetsPodilskyNewsByDate: KamyanetsPodilsky,
  getKrasylivNewsByDate: Krasyliv,
  getNetishynNewsByDate: Netishyn,
  getPolonneNewsByDate: Polonne,
  getShepetivkaNewsByDate: Shepetivka,
  getSlavutaNewsByDate: Slavuta,
  getStarokostiantynivkaNewsByDate: Starokostiantynivka,
  getVolochyskNewsByDate: Volochysk,
};

const HmelnytskiyGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionHmelnytskiyMethods)) {
  HmelnytskiyGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HmelnytskiyGetNewsByDateController;
