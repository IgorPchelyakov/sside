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
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDonetskMethods = {
  getAllAmvrosiivkaNews: Amvrosiivka,
  getAllAvdiyivkaNews: Avdiyivka,
  getAllBahmutNews: Bahmut,
  getAllDobropilliaNews: Dobropillia,
  getAllDokuchaevskNews: Dokuchaevsk,
  getAllDonetskNews: Donetsk,
  getAllDrushkivkaNews: Drushkivka,
  getAllGorlivkaNews: Gorlivka,
  getAllHartsyzskNews: Hartsyzsk,
  getAllKostyantynivkaNews: Kostyantynivka,
  getAllKramatorskNews: Kramatorsk,
  getAllKurakhoveNews: Kurakhove,
  getAllLimanNews: Liman,
  getAllMakiivkaNews: Makiivka,
  getAllMariupolNews: Mariupol,
  getAllMyrnohradNews: Myrnohrad,
  getAllPokrovskNews: Pokrovsk,
  getAllSelidoveNews: Selidove,
  getAllShakhtarskNews: Shakhtarsk,
  getAllSlovyanskNews: Slovyansk,
  getAllSnishneNews: Snishne,
  getAllToretskNews: Toretsk,
  getAllVolnovakhaNews: Volnovakha,
  getAllYenakievoNews: Yenakievo,
};

const DonetskGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionDonetskMethods)) {
  DonetskGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DonetskGetAllNewsWithNNController;
