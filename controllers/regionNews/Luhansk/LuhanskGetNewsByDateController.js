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
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLuhanskMethods = {
  getAlchevskNewsByDate: Alchevsk,
  getAntracitNewsByDate: Antracit,
  getBriankaNewsByDate: Brianka,
  getDovzhanskNewsByDate: Dovzhansk,
  getGolubivkaNewsByDate: Golubivka,
  getHrustalnyiNewsByDate: Hrustalnyi,
  getKadievkaNewsByDate: Kadievka,
  getKreminnaNewsByDate: Kreminna,
  getLuhanskNewsByDate: Luhansk,
  getLysychanskNewsByDate: Lysychansk,
  getMolodohvardiiskNewsByDate: Molodohvardiisk,
  getPerevalskNewsByDate: Perevalsk,
  getPervomaiskNewsByDate: Pervomaisk93200,
  getPopasnaNewsByDate: Popasna,
  getRivenkyNewsByDate: Rivenky,
  getRubizhneNewsByDate: Rubizhne,
  getSeverodonetskNewsByDate: Severodonetsk,
  getSorokyneNewsByDate: Sorokyne,
  getSuhodilskNewsByDate: Suhodilsk,
};

const LuhanskGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionLuhanskMethods)) {
  LuhanskGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LuhanskGetNewsByDateController;
