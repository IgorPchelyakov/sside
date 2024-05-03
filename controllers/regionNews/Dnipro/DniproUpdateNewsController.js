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
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDniproMethods = {
  updateDniproNews: Dnipro,
  updateKamianskeNews: Kamianske,
  updateKryvyiRihNews: KryvyiRih,
  updateMarganetsNews: Marganets,
  updateNikopolNews: Nikopol,
  updateNovomoskovskNews: Novomoskovsk,
  updatePavlogradNews: Pavlograd,
  updatePershotravenskNews: Pershotravensk,
  updatePokrovNews: Pokrov,
  updatePyatihatkyNews: Pyatihatky,
  updateSinelnikovoNews: Sinelnikovo,
  updateTernivkaNews: Ternivka,
  updateVilnohorskNews: Vilnohorsk,
  updateZhovtiVodyNews: ZhovtiVody,
};

const DniproUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionDniproMethods)) {
  DniproUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DniproUpdateNewsController;
