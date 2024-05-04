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
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDonetskMethods = {
  deleteMariupolNews: Mariupol,
  deleteKramatorskNews: Kramatorsk,
  deleteSlovyanskNews: Slovyansk,
  deleteYenakievoNews: Yenakievo,
  deleteKostyantynivkaNews: Kostyantynivka,
  deletePokrovskNews: Pokrovsk,
  deleteDrushkivkaNews: Drushkivka,
  deleteHartsyzskNews: Hartsyzsk,
  deleteShakhtarskNews: Shakhtarsk,
  deleteSnishneNews: Snishne,
  deleteMyrnohradNews: Myrnohrad,
  deleteDobropilliaNews: Dobropillia,
  deleteDonetskNews: Donetsk,
  deleteMakiivkaNews: Makiivka,
  deleteGorlivkaNews: Gorlivka,
  deleteToretskNews: Toretsk,
  deleteAvdiyivkaNews: Avdiyivka,
  deleteLimanNews: Liman,
  deleteSelidoveNews: Selidove,
  deleteVolnovakhaNews: Volnovakha,
  deleteDokuchaevskNews: Dokuchaevsk,
  deleteAmvrosiivkaNews: Amvrosiivka,
  deleteKurakhoveNews: Kurakhove,
  deleteBahmutNews: Bahmut,
};

const DonetskDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionDonetskMethods)) {
  DonetskDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DonetskDeleteNewsController;
