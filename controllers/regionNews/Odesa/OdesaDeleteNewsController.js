import BilgorodDnistrovsky from "../../../models/feeds/regionOdesa/bilgorod-dnistrovsky.js";
import Chornomorsk from "../../../models/feeds/regionOdesa/chornomorsk.js";
import Izmail from "../../../models/feeds/regionOdesa/izmail.js";
import Kiliya from "../../../models/feeds/regionOdesa/kiliya.js";
import Odesa from "../../../models/feeds/regionOdesa/odesa.js";
import Podilsk from "../../../models/feeds/regionOdesa/podilsk.js";
import Teplodar from "../../../models/feeds/regionOdesa/teplodar.js";
import Youzhne from "../../../models/feeds/regionOdesa/youzhne.js";
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
