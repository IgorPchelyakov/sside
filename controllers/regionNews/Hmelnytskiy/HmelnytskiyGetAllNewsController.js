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
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHmelnytskiyMethods = {
  getAllHmelnytskiyNews: Hmelnytskiy,
  getAllKamyanetsPodilskyNews: KamyanetsPodilsky,
  getAllKrasylivNews: Krasyliv,
  getAllNetishynNews: Netishyn,
  getAllPolonneNews: Polonne,
  getAllShepetivkaNews: Shepetivka,
  getAllSlavutaNews: Slavuta,
  getAllStarokostiantynivkaNews: Starokostiantynivka,
  getAllVolochyskNews: Volochysk,
};

const HmelnytskiyGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionHmelnytskiyMethods)) {
  HmelnytskiyGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HmelnytskiyGetAllNewsController;
