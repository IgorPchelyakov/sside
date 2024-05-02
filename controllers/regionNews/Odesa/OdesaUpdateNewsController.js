import BilgorodDnistrovsky from "../../../models/feeds/regionOdesa/bilgorod-dnistrovsky.js";
import Chornomorsk from "../../../models/feeds/regionOdesa/chornomorsk.js";
import Izmail from "../../../models/feeds/regionOdesa/izmail.js";
import Kiliya from "../../../models/feeds/regionOdesa/kiliya.js";
import Odesa from "../../../models/feeds/regionOdesa/odesa.js";
import Podilsk from "../../../models/feeds/regionOdesa/podilsk.js";
import Teplodar from "../../../models/feeds/regionOdesa/teplodar.js";
import Youzhne from "../../../models/feeds/regionOdesa/youzhne.js";
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
      console.log(data);

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default OdesaUpdateNewsController;
