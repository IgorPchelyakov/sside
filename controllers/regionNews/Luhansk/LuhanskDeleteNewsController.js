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
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLuhanskMethods = {
  deleteSeverodonetskNews: Severodonetsk,
  deleteLysychanskNews: Lysychansk,
  deleteRubizhneNews: Rubizhne,
  deletePervomaiskNews: Pervomaisk93200,
  deleteLuhanskNews: Luhansk,
  deleteHrustalnyiNews: Hrustalnyi,
  deleteAlchevskNews: Alchevsk,
  deleteKadievkaNews: Kadievka,
  deleteDovzhanskNews: Dovzhansk,
  deleteAntracitNews: Antracit,
  deleteBriankaNews: Brianka,
  deleteRivenkyNews: Rivenky,
  deleteSorokyneNews: Sorokyne,
  deleteGolubivkaNews: Golubivka,
  deletePerevalskNews: Perevalsk,
  deletePopasnaNews: Popasna,
  deleteMolodohvardiiskNews: Molodohvardiisk,
  deleteKreminnaNews: Kreminna,
  deleteSuhodilskNews: Suhodilsk,
};

const LuhanskDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionLuhanskMethods)) {
  LuhanskDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LuhanskDeleteNewsController;
