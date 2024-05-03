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
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDniproMethods = {
  deleteDniproNews: Dnipro,
  deleteKamianskeNews: Kamianske,
  deleteKryvyiRihNews: KryvyiRih,
  deleteMarganetsNews: Marganets,
  deleteNikopolNews: Nikopol,
  deleteNovomoskovskNews: Novomoskovsk,
  deletePavlogradNews: Pavlograd,
  deletePershotravenskNews: Pershotravensk,
  deletePokrovNews: Pokrov,
  deletePyatihatkyNews: Pyatihatky,
  deleteSinelnikovoNews: Sinelnikovo,
  deleteTernivkaNews: Ternivka,
  deleteVilnohorskNews: Vilnohorsk,
  deleteZhovtiVodyNews: ZhovtiVody,
};

const DniproDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionDniproMethods)) {
  DniproDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DniproDeleteNewsController;
