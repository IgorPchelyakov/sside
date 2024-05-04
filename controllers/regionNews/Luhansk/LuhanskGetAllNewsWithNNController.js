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
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLuhanskMethods = {
  getAllAlchevskNewsWithNN: Alchevsk,
  getAllAntracitNewsWithNN: Antracit,
  getAllBriankaNewsWithNN: Brianka,
  getAllDovzhanskNewsWithNN: Dovzhansk,
  getAllGolubivkaNewsWithNN: Golubivka,
  getAllHrustalnyiNewsWithNN: Hrustalnyi,
  getAllKadievkaNewsWithNN: Kadievka,
  getAllKreminnaNewsWithNN: Kreminna,
  getAllLuhanskNewsWithNN: Luhansk,
  getAllLysychanskNewsWithNN: Lysychansk,
  getAllMolodohvardiiskNewsWithNN: Molodohvardiisk,
  getAllPerevalskNewsWithNN: Perevalsk,
  getAllPervomaiskNewsWithNN: Pervomaisk93200,
  getAllPopasnaNewsWithNN: Popasna,
  getAllRivenkyNewsWithNN: Rivenky,
  getAllRubizhneNewsWithNN: Rubizhne,
  getAllSeverodonetskNewsWithNN: Severodonetsk,
  getAllSorokyneNewsWithNN: Sorokyne,
  getAllSuhodilskNewsWithNN: Suhodilsk,
};

const LuhanskGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionLuhanskMethods)) {
  LuhanskGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LuhanskGetAllNewsWithNNController;
