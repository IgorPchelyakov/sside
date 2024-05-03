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
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionOdesaMethods = {
  deleteBilgorodDnistrovskyNews: BilgorodDnistrovsky,
  deleteChornomorskNews: Chornomorsk,
  deleteIzmailNews: Izmail,
  deleteKiliyaNews: Kiliya,
  deleteOdesaNews: Odesa,
  deletePodilskNews: Podilsk,
  deleteTeplodarNews: Teplodar,
  deleteYouzhneNews: Youzhne,
};

const OdesaDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionOdesaMethods)) {
  OdesaDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default OdesaDeleteNewsController;
