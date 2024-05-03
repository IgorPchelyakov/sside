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
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDniproMethods = {
  searchDniproNews: Dnipro,
  searchKamianskeNews: Kamianske,
  searchKryvyiRihNews: KryvyiRih,
  searchMarganetsNews: Marganets,
  searchNikopolNews: Nikopol,
  searchNovomoskovskNews: Novomoskovsk,
  searchPavlogradNews: Pavlograd,
  searchPershotravenskNews: Pershotravensk,
  searchPokrovNews: Pokrov,
  searchPyatihatkyNews: Pyatihatky,
  searchSinelnikovoNews: Sinelnikovo,
  searchTernivkaNews: Ternivka,
  searchVilnohorskNews: Vilnohorsk,
  searchZhovtiVodyNews: ZhovtiVody,
};

const DniproSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionDniproMethods)) {
  DniproSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DniproSearchNewsController;
