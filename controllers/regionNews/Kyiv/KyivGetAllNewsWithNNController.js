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
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKyivMethods = {
  getAllBerezanNewsWithNN: Berezan,
  getAllBilacerkvaNewsWithNN: Bilacerkva,
  getAllBoryspilNewsWithNN: Boryspil,
  getAllBoyarkaNewsWithNN: Boyarka,
  getAllBrovaryNewsWithNN: Brovary,
  getAllBuchaNewsWithNN: Bucha,
  getAllFastivNewsWithNN: Fastiv,
  getAllIrpinNewsWithNN: Irpin,
  getAllKyivNewsWithNN: Kyiv,
  getAllObukhivNewsWithNN: Obukhiv,
  getAllPereyaslavNewsWithNN: Pereyaslav,
  getAllSkvyraNewsWithNN: Skvyra,
  getAllSlavutychNewsWithNN: Slavutych,
  getAllVasylkivNewsWithNN: Vasylkiv,
  getAllVyshhorodNewsWithNN: Vyshhorod,
  getAllVyshneveNewsWithNN: Vyshneve,
  getAllYagotynNewsWithNN: Yagotyn,
};

const KyivGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionKyivMethods)) {
  KyivGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KyivGetAllNewsWithNNController;
