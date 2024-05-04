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
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHmelnytskiyMethods = {
  searchHmelnytskiyNews: Hmelnytskiy,
  searchKamyanetsPodilskyNews: KamyanetsPodilsky,
  searchKrasylivNews: Krasyliv,
  searchNetishynNews: Netishyn,
  searchPolonneNews: Polonne,
  searchShepetivkaNews: Shepetivka,
  searchSlavutaNews: Slavuta,
  searchStarokostiantynivkaNews: Starokostiantynivka,
  searchVolochyskNews: Volochysk,
};

const HmelnytskiySearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionHmelnytskiyMethods)) {
  HmelnytskiySearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HmelnytskiySearchNewsController;
