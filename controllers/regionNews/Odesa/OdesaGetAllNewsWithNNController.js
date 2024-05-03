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
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionOdesaMethods = {
  getAllBilgorodDnistrovskyNewsWithNN: BilgorodDnistrovsky,
  getAllChornomorskNewsWithNN: Chornomorsk,
  getAllIzmailNewsWithNN: Izmail,
  getAllKiliyaNewsWithNN: Kiliya,
  getAllOdesaNewsWithNN: Odesa,
  getAllPodilskNewsWithNN: Podilsk,
  getAllTeplodarNewsWithNN: Teplodar,
  getAllYouzhneNewsWithNN: Youzhne,
};

const OdesaGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionOdesaMethods)) {
  OdesaGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default OdesaGetAllNewsWithNNController;
