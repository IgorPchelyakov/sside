import BilgorodDnistrovsky from "../../../models/feeds/regionOdesa/bilgorod-dnistrovsky.js";
import Chornomorsk from "../../../models/feeds/regionOdesa/chornomorsk.js";
import Izmail from "../../../models/feeds/regionOdesa/izmail.js";
import Kiliya from "../../../models/feeds/regionOdesa/kiliya.js";
import Odesa from "../../../models/feeds/regionOdesa/odesa.js";
import Podilsk from "../../../models/feeds/regionOdesa/podilsk.js";
import Teplodar from "../../../models/feeds/regionOdesa/teplodar.js";
import Youzhne from "../../../models/feeds/regionOdesa/youzhne.js";
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
