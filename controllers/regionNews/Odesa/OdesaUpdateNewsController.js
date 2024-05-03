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
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionOdesaMethods = {
  updateBilgorodDnistrovskyNews: BilgorodDnistrovsky,
  updateChornomorskNews: Chornomorsk,
  updateIzmailNews: Izmail,
  updateKiliyaNews: Kiliya,
  updateOdesaNews: Odesa,
  updatePodilskNews: Podilsk,
  updateTeplodarNews: Teplodar,
  updateYouzhneNews: Youzhne,
};

const OdesaUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionOdesaMethods)) {
  OdesaUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default OdesaUpdateNewsController;
