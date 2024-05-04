import {
  Balakliia,
  Chuguiv,
  Derhachi,
  Harkiv,
  Izium,
  Krasnohrad,
  Kupiansk,
  Lozova,
  Lubotyn,
  Merefa,
  Pervomaiskyi,
  Vovchansk,
} from "../../../models/feeds/regionHarkiv/harkivCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHarkivMethods = {
  deleteBalakliiaNews: Balakliia,
  deleteChuguivNews: Chuguiv,
  deleteDerhachiNews: Derhachi,
  deleteHarkivNews: Harkiv,
  deleteIziumNews: Izium,
  deleteKrasnohradNews: Krasnohrad,
  deleteKupianskNews: Kupiansk,
  deleteLozovaNews: Lozova,
  deleteLubotynNews: Lubotyn,
  deleteMerefaNews: Merefa,
  deletePervomaiskyiNews: Pervomaiskyi,
  deleteVovchanskNews: Vovchansk,
};

const HarkivDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionHarkivMethods)) {
  HarkivDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HarkivDeleteNewsController;
