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
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDniproMethods = {
  getAllDniproNews: Dnipro,
  getAllKamianskeNews: Kamianske,
  getAllKryvyiRihNews: KryvyiRih,
  getAllMarganetsNews: Marganets,
  getAllNikopolNews: Nikopol,
  getAllNovomoskovskNews: Novomoskovsk,
  getAllPavlogradNews: Pavlograd,
  getAllPershotravenskNews: Pershotravensk,
  getAllPokrovNews: Pokrov,
  getAllPyatihatkyNews: Pyatihatky,
  getAllSinelnikovoNews: Sinelnikovo,
  getAllTernivkaNews: Ternivka,
  getAllVilnohorskNews: Vilnohorsk,
  getAllZhovtiVodyNews: ZhovtiVody,
};

const DniproGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionDniproMethods)) {
  DniproGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DniproGetAllNewsController;
