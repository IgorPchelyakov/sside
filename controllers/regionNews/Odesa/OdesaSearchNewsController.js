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
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionOdesaMethods = {
  searchBilgorodDnistrovskyNews: BilgorodDnistrovsky,
  searchChornomorskNews: Chornomorsk,
  searchIzmailNews: Izmail,
  searchKiliyaNews: Kiliya,
  searchOdesaNews: Odesa,
  searchPodilskNews: Podilsk,
  searchTeplodarNews: Teplodar,
  searchYouzhneNews: Youzhne,
};

const OdesaSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionOdesaMethods)) {
  OdesaSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default OdesaSearchNewsController;
