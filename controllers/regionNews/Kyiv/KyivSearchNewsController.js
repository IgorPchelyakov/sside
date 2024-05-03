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
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKyivMethods = {
  searchBerezanNews: Berezan,
  searchBilacerkvaNews: Bilacerkva,
  searchBoryspilNews: Boryspil,
  searchBoyarkaNews: Boyarka,
  searchBrovaryNews: Brovary,
  searchBuchaNews: Bucha,
  searchFastivNews: Fastiv,
  searchIrpinNews: Irpin,
  searchKyivNews: Kyiv,
  searchObukhivNews: Obukhiv,
  searchPereyaslavNews: Pereyaslav,
  searchSkvyraNews: Skvyra,
  searchSlavutychNews: Slavutych,
  searchVasylkivNews: Vasylkiv,
  searchVyshhorodNews: Vyshhorod,
  searchVyshneveNews: Vyshneve,
  searchYagotynNews: Yagotyn,
};

const KyivSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionKyivMethods)) {
  KyivSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KyivSearchNewsController;
