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
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHmelnytskiyMethods = {
  getAllHmelnytskiyNewsWithNN: Hmelnytskiy,
  getAllKamyanetsPodilskyNewsWithNN: KamyanetsPodilsky,
  getAllKrasylivNewsWithNN: Krasyliv,
  getAllNetishynNewsWithNN: Netishyn,
  getAllPolonneNewsWithNN: Polonne,
  getAllShepetivkaNewsWithNN: Shepetivka,
  getAllSlavutaNewsWithNN: Slavuta,
  getAllStarokostiantynivkaNewsWithNN: Starokostiantynivka,
  getAllVolochyskNewsWithNN: Volochysk,
};

const HmelnytskiyGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionHmelnytskiyMethods)) {
  HmelnytskiyGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HmelnytskiyGetAllNewsWithNNController;
