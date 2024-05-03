import {
  BilgorodDnistrovsky,
  Chornomorsk,
  Izmail,
  Kiliya,
  Odesa,
  Podilsk,
  Teplodar,
  Youzhne,
} from "../../../models/feeds/regionOdesa/odesaCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionOdesaMethods = {
  getBilgorodDnistrovskyNewsByIdOrUrl: BilgorodDnistrovsky,
  getChornomorskNewsByIdOrUrl: Chornomorsk,
  getIzmailNewsByIdOrUrl: Izmail,
  getKiliyaNewsByIdOrUrl: Kiliya,
  getOdesaNewsByIdOrUrl: Odesa,
  getPodilskNewsByIdOrUrl: Podilsk,
  getTeplodarNewsByIdOrUrl: Teplodar,
  getYouzhneNewsByIdOrUrl: Youzhne,
};

const OdesaGetNewsByIdOrUrl = {};

for (const [methodName, Model] of Object.entries(RegionOdesaMethods)) {
  OdesaGetNewsByIdOrUrl[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default OdesaGetNewsByIdOrUrl;
