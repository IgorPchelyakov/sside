import {
  Boryslav,
  Brody,
  Chervonograd,
  Dragobych,
  Lviv,
  Novoiavorivsk,
  NovyiRozdil,
  Sambir,
  Sokal,
  Stebnyk,
  Stryi,
  Truskavets,
  Zolochiv,
} from "../../../models/feeds/regionLviv/lvivCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLvivMethods = {
  deleteLvivNews: Lviv,
  deleteDragobychNews: Dragobych,
  deleteChervonogradNews: Chervonograd,
  deleteStryiNews: Stryi,
  deleteBoryslavNews: Boryslav,
  deleteSambirNews: Sambir,
  deleteNovyiRozdilNews: NovyiRozdil,
  deleteNovoiavorivskNews: Novoiavorivsk,
  deleteZolochivNews: Zolochiv,
  deleteBrodyNews: Brody,
  deleteTruskavetsNews: Truskavets,
  deleteSokalNews: Sokal,
  deleteStebnykNews: Stebnyk,
};

const LvivDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionLvivMethods)) {
  LvivDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LvivDeleteNewsController;
