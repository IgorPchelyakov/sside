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
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKyivMethods = {
  updateBerezanNews: Berezan,
  updateBilacerkvaNews: Bilacerkva,
  updateBoryspilNews: Boryspil,
  updateBoyarkaNews: Boyarka,
  updateBrovaryNews: Brovary,
  updateBuchaNews: Bucha,
  updateFastivNews: Fastiv,
  updateIrpinNews: Irpin,
  updateKyivNews: Kyiv,
  updateObukhivNews: Obukhiv,
  updatePereyaslavNews: Pereyaslav,
  updateSkvyraNews: Skvyra,
  updateSlavutychNews: Slavutych,
  updateVasylkivNews: Vasylkiv,
  updateVyshhorodNews: Vyshhorod,
  updateVyshneveNews: Vyshneve,
  updateYagotynNews: Yagotyn,
};

const KyivUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionKyivMethods)) {
  KyivUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KyivUpdateNewsController;
