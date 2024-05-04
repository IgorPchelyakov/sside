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
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDonetskMethods = {
  searchAmvrosiivkaNews: Amvrosiivka,
  searchAvdiyivkaNews: Avdiyivka,
  searchBahmutNews: Bahmut,
  searchDobropilliaNews: Dobropillia,
  searchDokuchaevskNews: Dokuchaevsk,
  searchDonetskNews: Donetsk,
  searchDrushkivkaNews: Drushkivka,
  searchGorlivkaNews: Gorlivka,
  searchHartsyzskNews: Hartsyzsk,
  searchKostyantynivkaNews: Kostyantynivka,
  searchKramatorskNews: Kramatorsk,
  searchKurakhoveNews: Kurakhove,
  searchLimanNews: Liman,
  searchMakiivkaNews: Makiivka,
  searchMariupolNews: Mariupol,
  searchMyrnohradNews: Myrnohrad,
  searchPokrovskNews: Pokrovsk,
  searchSelidoveNews: Selidove,
  searchShakhtarskNews: Shakhtarsk,
  searchSlovyanskNews: Slovyansk,
  searchSnishneNews: Snishne,
  searchToretskNews: Toretsk,
  searchVolnovakhaNews: Volnovakha,
  searchYenakievoNews: Yenakievo,
};

const DonetskSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionDonetskMethods)) {
  DonetskSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DonetskSearchNewsController;
