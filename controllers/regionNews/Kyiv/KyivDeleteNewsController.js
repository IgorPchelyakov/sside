import {
  Berezan,
  Bilacerkva,
  Boryspil,
  Boyarka,
  Brovary,
  Bucha,
  Fastiv,
  Irpin,
  Kyiv,
  Obukhiv,
  Pereyaslav,
  Skvyra,
  Slavutych,
  Vasylkiv,
  Vyshhorod,
  Vyshneve,
  Yagotyn,
} from "../../../models/feeds/regionKyiv/kyivCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKyivMethods = {
  deleteBerezanNews: Berezan,
  deleteBilacerkvaNews: Bilacerkva,
  deleteBoryspilNews: Boryspil,
  deleteBoyarkaNews: Boyarka,
  deleteBrovaryNews: Brovary,
  deleteBuchaNews: Bucha,
  deleteFastivNews: Fastiv,
  deleteIrpinNews: Irpin,
  deleteKyivNews: Kyiv,
  deleteObukhivNews: Obukhiv,
  deletePereyaslavNews: Pereyaslav,
  deleteSkvyraNews: Skvyra,
  deleteSlavutychNews: Slavutych,
  deleteVasylkivNews: Vasylkiv,
  deleteVyshhorodNews: Vyshhorod,
  deleteVyshneveNews: Vyshneve,
  deleteYagotynNews: Yagotyn,
};

const KyivDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionKyivMethods)) {
  KyivDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KyivDeleteNewsController;
