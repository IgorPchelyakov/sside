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
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionOdesaMethods = {
  getBilgorodDnistrovskyNewsByDate: BilgorodDnistrovsky,
  getChornomorskNewsByDate: Chornomorsk,
  getIzmailNewsByDate: Izmail,
  getKiliyaNewsByDate: Kiliya,
  getOdesaNewsByDate: Odesa,
  getPodilskNewsByDate: Podilsk,
  getTeplodarNewsByDate: Teplodar,
  getYouzhneNewsByDate: Youzhne,
};

const OdesaGetNewsByDate = {};

for (const [methodName, Model] of Object.entries(RegionOdesaMethods)) {
  OdesaGetNewsByDate[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default OdesaGetNewsByDate;
