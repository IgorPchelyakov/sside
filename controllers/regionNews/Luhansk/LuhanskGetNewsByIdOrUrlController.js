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
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLuhanskMethods = {
  getAlchevskNewsByIdOrUrl: Alchevsk,
  getAntracitNewsByIdOrUrl: Antracit,
  getBriankaNewsByIdOrUrl: Brianka,
  getDovzhanskNewsByIdOrUrl: Dovzhansk,
  getGolubivkaNewsByIdOrUrl: Golubivka,
  getHrustalnyiNewsByIdOrUrl: Hrustalnyi,
  getKadievkaNewsByIdOrUrl: Kadievka,
  getKreminnaNewsByIdOrUrl: Kreminna,
  getLuhanskNewsByIdOrUrl: Luhansk,
  getLysychanskNewsByIdOrUrl: Lysychansk,
  getMolodohvardiiskNewsByIdOrUrl: Molodohvardiisk,
  getPerevalskNewsByIdOrUrl: Perevalsk,
  getPervomaiskNewsByIdOrUrl: Pervomaisk93200,
  getPopasnaNewsByIdOrUrl: Popasna,
  getRivenkyNewsByIdOrUrl: Rivenky,
  getRubizhneNewsByIdOrUrl: Rubizhne,
  getSeverodonetskNewsByIdOrUrl: Severodonetsk,
  getSorokyneNewsByIdOrUrl: Sorokyne,
  getSuhodilskNewsByIdOrUrl: Suhodilsk,
};

const LuhanskGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionLuhanskMethods)) {
  LuhanskGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LuhanskGetNewsByIdOrUrlController;
