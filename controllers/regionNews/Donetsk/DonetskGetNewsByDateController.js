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
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDonetskMethods = {
  getAmvrosiivkaNewsByDate: Amvrosiivka,
  getAvdiyivkaNewsByDate: Avdiyivka,
  getBahmutNewsByDate: Bahmut,
  getDobropilliaNewsByDate: Dobropillia,
  getDokuchaevskNewsByDate: Dokuchaevsk,
  getDonetskNewsByDate: Donetsk,
  getDrushkivkaNewsByDate: Drushkivka,
  getGorlivkaNewsByDate: Gorlivka,
  getHartsyzskNewsByDate: Hartsyzsk,
  getKostyantynivkaNewsByDate: Kostyantynivka,
  getKramatorskNewsByDate: Kramatorsk,
  getKurakhoveNewsByDate: Kurakhove,
  getLimanNewsByDate: Liman,
  getMakiivkaNewsByDate: Makiivka,
  getMariupolNewsByDate: Mariupol,
  getMyrnohradNewsByDate: Myrnohrad,
  getPokrovskNewsByDate: Pokrovsk,
  getSelidoveNewsByDate: Selidove,
  getShakhtarskNewsByDate: Shakhtarsk,
  getSlovyanskNewsByDate: Slovyansk,
  getSnishneNewsByDate: Snishne,
  getToretskNewsByDate: Toretsk,
  getVolnovakhaNewsByDate: Volnovakha,
  getYenakievoNewsByDate: Yenakievo,
};

const DonetskGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionDonetskMethods)) {
  DonetskGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DonetskGetNewsByDateController;
