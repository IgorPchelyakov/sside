import {
  Alchevsk,
  Antracit,
  Brianka,
  Dovzhansk,
  Golubivka,
  Hrustalnyi,
  Kadievka,
  Kreminna,
  Luhansk,
  Lysychansk,
  Molodohvardiisk,
  Perevalsk,
  Pervomaisk93200,
  Popasna,
  Rivenky,
  Rubizhne,
  Severodonetsk,
  Sorokyne,
  Suhodilsk,
} from "../../../models/feeds/regionLuhansk/luhanskCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLuhanskMethods = {
  searchAlchevskNews: Alchevsk,
  searchAntracitNews: Antracit,
  searchBriankaNews: Brianka,
  searchDovzhanskNews: Dovzhansk,
  searchGolubivkaNews: Golubivka,
  searchHrustalnyiNews: Hrustalnyi,
  searchKadievkaNews: Kadievka,
  searchKreminnaNews: Kreminna,
  searchLuhanskNews: Luhansk,
  searchLysychanskNews: Lysychansk,
  searchMolodohvardiiskNews: Molodohvardiisk,
  searchPerevalskNews: Perevalsk,
  searchPervomaiskNews: Pervomaisk93200,
  searchPopasnaNews: Popasna,
  searchRivenkyNews: Rivenky,
  searchRubizhneNews: Rubizhne,
  searchSeverodonetskNews: Severodonetsk,
  searchSorokyneNews: Sorokyne,
  searchSuhodilskNews: Suhodilsk,
};

const LuhanskSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionLuhanskMethods)) {
  LuhanskSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LuhanskSearchNewsController;
