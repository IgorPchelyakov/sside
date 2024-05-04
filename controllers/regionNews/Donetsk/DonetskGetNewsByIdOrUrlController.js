import {
  Amvrosiivka,
  Avdiyivka,
  Bahmut,
  Dobropillia,
  Dokuchaevsk,
  Donetsk,
  Drushkivka,
  Gorlivka,
  Hartsyzsk,
  Kostyantynivka,
  Kramatorsk,
  Kurakhove,
  Liman,
  Makiivka,
  Mariupol,
  Myrnohrad,
  Pokrovsk,
  Selidove,
  Shakhtarsk,
  Slovyansk,
  Snishne,
  Toretsk,
  Volnovakha,
  Yenakievo,
} from "../../../models/feeds/regionDonetsk/donetskCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDonetskMethods = {
  getAmvrosiivkaNewsByIdOrUrl: Amvrosiivka,
  getAvdiyivkaNewsByIdOrUrl: Avdiyivka,
  getBahmutNewsByIdOrUrl: Bahmut,
  getDobropilliaNewsByIdOrUrl: Dobropillia,
  getDokuchaevskNewsByIdOrUrl: Dokuchaevsk,
  getDonetskNewsByIdOrUrl: Donetsk,
  getDrushkivkaNewsByIdOrUrl: Drushkivka,
  getGorlivkaNewsByIdOrUrl: Gorlivka,
  getHartsyzskNewsByIdOrUrl: Hartsyzsk,
  getKostyantynivkaNewsByIdOrUrl: Kostyantynivka,
  getKramatorskNewsByIdOrUrl: Kramatorsk,
  getKurakhoveNewsByIdOrUrl: Kurakhove,
  getLimanNewsByIdOrUrl: Liman,
  getMakiivkaNewsByIdOrUrl: Makiivka,
  getMariupolNewsByIdOrUrl: Mariupol,
  getMyrnohradNewsByIdOrUrl: Myrnohrad,
  getPokrovskNewsByIdOrUrl: Pokrovsk,
  getSelidoveNewsByIdOrUrl: Selidove,
  getShakhtarskNewsByIdOrUrl: Shakhtarsk,
  getSlovyanskNewsByIdOrUrl: Slovyansk,
  getSnishneNewsByIdOrUrl: Snishne,
  getToretskNewsByIdOrUrl: Toretsk,
  getVolnovakhaNewsByIdOrUrl: Volnovakha,
  getYenakievoNewsByIdOrUrl: Yenakievo,
};

const DonetskGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionDonetskMethods)) {
  DonetskGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DonetskGetNewsByIdOrUrlController;
