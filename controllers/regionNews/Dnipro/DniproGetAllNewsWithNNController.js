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
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionDniproMethods = {
  getAllDniproNewsWithNN: Dnipro,
  getAllKamianskeNewsWithNN: Kamianske,
  getAllKryvyiRihNewsWithNN: KryvyiRih,
  getAllMarganetsNewsWithNN: Marganets,
  getAllNikopolNewsWithNN: Nikopol,
  getAllNovomoskovskNewsWithNN: Novomoskovsk,
  getAllPavlogradNewsWithNN: Pavlograd,
  getAllPershotravenskNewsWithNN: Pershotravensk,
  getAllPokrovNewsWithNN: Pokrov,
  getAllPyatihatkyNewsWithNN: Pyatihatky,
  getAllSinelnikovoNewsWithNN: Sinelnikovo,
  getAllTernivkaNewsWithNN: Ternivka,
  getAllVilnohorskNewsWithNN: Vilnohorsk,
  getAllZhovtiVodyNewsWithNN: ZhovtiVody,
};

const DniproGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionDniproMethods)) {
  DniproGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default DniproGetAllNewsWithNNController;
