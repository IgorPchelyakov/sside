import {
  Dnipro,
  Kamianske,
  KryvyiRih,
  Marganets,
  Nikopol,
  Novomoskovsk,
  Pavlograd,
  Pershotravensk,
  Pokrov,
  Pyatihatky,
  Sinelnikovo,
  Ternivka,
  Vilnohorsk,
  ZhovtiVody,
} from "../../../models/feeds/regionDnipro/dniproCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDniproMethods = {
  getDniproNewsByDate: Dnipro,
  getKamianskeNewsByDate: Kamianske,
  getKryvyiRihNewsByDate: KryvyiRih,
  getMarganetsNewsByDate: Marganets,
  getNikopolNewsByDate: Nikopol,
  getNovomoskovskNewsByDate: Novomoskovsk,
  getPavlogradNewsByDate: Pavlograd,
  getPershotravenskNewsByDate: Pershotravensk,
  getPokrovNewsByDate: Pokrov,
  getPyatihatkyNewsByDate: Pyatihatky,
  getSinelnikovoNewsByDate: Sinelnikovo,
  getTernivkaNewsByDate: Ternivka,
  getVilnohorskNewsByDate: Vilnohorsk,
  getZhovtiVodyNewsByDate: ZhovtiVody,
};

const DniproGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionDniproMethods)) {
  DniproGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DniproGetNewsByDateController;
