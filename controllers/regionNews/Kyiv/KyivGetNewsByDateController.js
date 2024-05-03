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
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKyivMethods = {
  getBerezanNewsByDate: Berezan,
  getBilacerkvaNewsByDate: Bilacerkva,
  getBoryspilNewsByDate: Boryspil,
  getBoyarkaNewsByDate: Boyarka,
  getBrovaryNewsByDate: Brovary,
  getBuchaNewsByDate: Bucha,
  getFastivNewsByDate: Fastiv,
  getIrpinNewsByDate: Irpin,
  getKyivNewsByDate: Kyiv,
  getObukhivNewsByDate: Obukhiv,
  getPereyaslavNewsByDate: Pereyaslav,
  getSkvyraNewsByDate: Skvyra,
  getSlavutychNewsByDate: Slavutych,
  getVasylkivNewsByDate: Vasylkiv,
  getVyshhorodNewsByDate: Vyshhorod,
  getVyshneveNewsByDate: Vyshneve,
  getYagotynNewsByDate: Yagotyn,
};

const KyivGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionKyivMethods)) {
  KyivGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KyivGetNewsByDateController;
