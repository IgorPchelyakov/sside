import {
  Kovel,
  Lutsk,
  Novovolynsk,
  VolodymyrVolynskyi,
} from "../../../models/feeds/regionVolynsk/volynskCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVolynskMethods = {
  deleteLutskNews: Lutsk,
  deleteKovelNews: Kovel,
  deleteNovovolynskNews: Novovolynsk,
  deleteVolodymyrVolynskyiNews: VolodymyrVolynskyi,
};

const VolynskDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionVolynskMethods)) {
  VolynskDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VolynskDeleteNewsController;
