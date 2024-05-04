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
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDonetskMethods = {
  updateAmvrosiivkaNews: Amvrosiivka,
  updateAvdiyivkaNews: Avdiyivka,
  updateBahmutNews: Bahmut,
  updateDobropilliaNews: Dobropillia,
  updateDokuchaevskNews: Dokuchaevsk,
  updateDonetskNews: Donetsk,
  updateDrushkivkaNews: Drushkivka,
  updateGorlivkaNews: Gorlivka,
  updateHartsyzskNews: Hartsyzsk,
  updateKostyantynivkaNews: Kostyantynivka,
  updateKramatorskNews: Kramatorsk,
  updateKurakhoveNews: Kurakhove,
  updateLimanNews: Liman,
  updateMakiivkaNews: Makiivka,
  updateMariupolNews: Mariupol,
  updateMyrnohradNews: Myrnohrad,
  updatePokrovskNews: Pokrovsk,
  updateSelidoveNews: Selidove,
  updateShakhtarskNews: Shakhtarsk,
  updateSlovyanskNews: Slovyansk,
  updateSnishneNews: Snishne,
  updateToretskNews: Toretsk,
  updateVolnovakhaNews: Volnovakha,
  updateYenakievoNews: Yenakievo,
};

const DonetskUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionDonetskMethods)) {
  DonetskUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DonetskUpdateNewsController;
