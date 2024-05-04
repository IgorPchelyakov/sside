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
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLuhanskMethods = {
  updateAlchevskNews: Alchevsk,
  updateAntracitNews: Antracit,
  updateBriankaNews: Brianka,
  updateDovzhanskNews: Dovzhansk,
  updateGolubivkaNews: Golubivka,
  updateHrustalnyiNews: Hrustalnyi,
  updateKadievkaNews: Kadievka,
  updateKreminnaNews: Kreminna,
  updateLuhanskNews: Luhansk,
  updateLysychanskNews: Lysychansk,
  updateMolodohvardiiskNews: Molodohvardiisk,
  updatePerevalskNews: Perevalsk,
  updatePervomaiskNews: Pervomaisk93200,
  updatePopasnaNews: Popasna,
  updateRivenkyNews: Rivenky,
  updateRubizhneNews: Rubizhne,
  updateSeverodonetskNews: Severodonetsk,
  updateSorokyneNews: Sorokyne,
  updateSuhodilskNews: Suhodilsk,
};

const LuhanskUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionLuhanskMethods)) {
  LuhanskUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LuhanskUpdateNewsController;
