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
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKyivMethods = {
  getAllBerezanNews: Berezan,
  getAllBilacerkvaNews: Bilacerkva,
  getAllBoryspilNews: Boryspil,
  getAllBoyarkaNews: Boyarka,
  getAllBrovaryNews: Brovary,
  getAllBuchaNews: Bucha,
  getAllFastivNews: Fastiv,
  getAllIrpinNews: Irpin,
  getAllKyivNews: Kyiv,
  getAllObukhivNews: Obukhiv,
  getAllPereyaslavNews: Pereyaslav,
  getAllSkvyraNews: Skvyra,
  getAllSlavutychNews: Slavutych,
  getAllVasylkivNews: Vasylkiv,
  getAllVyshhorodNews: Vyshhorod,
  getAllVyshneveNews: Vyshneve,
  getAllYagotynNews: Yagotyn,
};

const KyivGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionKyivMethods)) {
  KyivGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KyivGetAllNewsController;
