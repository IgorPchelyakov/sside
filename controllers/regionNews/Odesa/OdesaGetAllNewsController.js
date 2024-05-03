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
