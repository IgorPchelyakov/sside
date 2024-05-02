import BilgorodDnistrovsky from "../../../models/feeds/regionOdesa/bilgorod-dnistrovsky.js";
import Chornomorsk from "../../../models/feeds/regionOdesa/chornomorsk.js";
import Izmail from "../../../models/feeds/regionOdesa/izmail.js";
import Kiliya from "../../../models/feeds/regionOdesa/kiliya.js";
import Odesa from "../../../models/feeds/regionOdesa/odesa.js";
import Podilsk from "../../../models/feeds/regionOdesa/podilsk.js";
import Teplodar from "../../../models/feeds/regionOdesa/teplodar.js";
import Youzhne from "../../../models/feeds/regionOdesa/youzhne.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionOdesaMethods = {
  getAllBilgorodDnistrovskyNews: BilgorodDnistrovsky,
  getAllChornomorskNews: Chornomorsk,
  getAllIzmailNews: Izmail,
  getAllKiliyaNews: Kiliya,
  getAllOdesaNews: Odesa,
  getAllPodilskNews: Podilsk,
  getAllTeplodarNews: Teplodar,
  getAllYouzhneNews: Youzhne,
};

const OdesaGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionOdesaMethods)) {
  OdesaGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default OdesaGetAllNewsController;
