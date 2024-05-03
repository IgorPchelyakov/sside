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
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDniproMethods = {
  getDniproNewsByIdOrUrl: Dnipro,
  getKamianskeNewsByIdOrUrl: Kamianske,
  getKryvyiRihNewsByIdOrUrl: KryvyiRih,
  getMarganetsNewsByIdOrUrl: Marganets,
  getNikopolNewsByIdOrUrl: Nikopol,
  getNovomoskovskNewsByIdOrUrl: Novomoskovsk,
  getPavlogradNewsByIdOrUrl: Pavlograd,
  getPershotravenskNewsByIdOrUrl: Pershotravensk,
  getPokrovNewsByIdOrUrl: Pokrov,
  getPyatihatkyNewsByIdOrUrl: Pyatihatky,
  getSinelnikovoNewsByIdOrUrl: Sinelnikovo,
  getTernivkaNewsByIdOrUrl: Ternivka,
  getVilnohorskNewsByIdOrUrl: Vilnohorsk,
  getZhovtiVodyNewsByIdOrUrl: ZhovtiVody,
};

const DniproGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionDniproMethods)) {
  DniproGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DniproGetNewsByIdOrUrlController;
