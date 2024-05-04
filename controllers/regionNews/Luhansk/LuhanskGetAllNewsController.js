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
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLuhanskMethods = {
  getAllAlchevskNews: Alchevsk,
  getAllAntracitNews: Antracit,
  getAllBriankaNews: Brianka,
  getAllDovzhanskNews: Dovzhansk,
  getAllGolubivkaNews: Golubivka,
  getAllHrustalnyiNews: Hrustalnyi,
  getAllKadievkaNews: Kadievka,
  getAllKreminnaNews: Kreminna,
  getAllLuhanskNews: Luhansk,
  getAllLysychanskNews: Lysychansk,
  getAllMolodohvardiiskNews: Molodohvardiisk,
  getAllPerevalskNews: Perevalsk,
  getAllPervomaiskNews: Pervomaisk93200,
  getAllPopasnaNews: Popasna,
  getAllRivenkyNews: Rivenky,
  getAllRubizhneNews: Rubizhne,
  getAllSeverodonetskNews: Severodonetsk,
  getAllSorokyneNews: Sorokyne,
  getAllSuhodilskNews: Suhodilsk,
};

const LuhanskGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionLuhanskMethods)) {
  LuhanskGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LuhanskGetAllNewsController;
