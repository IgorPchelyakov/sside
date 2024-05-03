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
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKyivMethods = {
  getBerezanNewsByIdOrUrl: Berezan,
  getBilacerkvaNewsByIdOrUrl: Bilacerkva,
  getBoryspilNewsByIdOrUrl: Boryspil,
  getBoyarkaNewsByIdOrUrl: Boyarka,
  getBrovaryNewsByIdOrUrl: Brovary,
  getBuchaNewsByIdOrUrl: Bucha,
  getFastivNewsByIdOrUrl: Fastiv,
  getIrpinNewsByIdOrUrl: Irpin,
  getKyivNewsByIdOrUrl: Kyiv,
  getObukhivNewsByIdOrUrl: Obukhiv,
  getPereyaslavNewsByIdOrUrl: Pereyaslav,
  getSkvyraNewsByIdOrUrl: Skvyra,
  getSlavutychNewsByIdOrUrl: Slavutych,
  getVasylkivNewsByIdOrUrl: Vasylkiv,
  getVyshhorodNewsByIdOrUrl: Vyshhorod,
  getVyshneveNewsByIdOrUrl: Vyshneve,
  getYagotynNewsByIdOrUrl: Yagotyn,
};

const KyivGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionKyivMethods)) {
  KyivGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KyivGetNewsByIdOrUrlController;
