import { Op } from "sequelize";
import NationalNews from "../models/nationalNews.js";

const SitemapsController = {
  getAllNNLinks: async (req, res) => {
    try {
      const links = await NationalNews.findAll({
        attributes: ["id", "publishedAt", "url", "createdAt", "updatedAt"],
        order: [["publishedAt", "ASC"]],
      });

      res.status(200).json(links);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  getUpdateEveryHourLinks: async (req, res) => {
    try {
      const oneHourAgo = new Date(new Date() - 60 * 60 * 1000);

      const links = await NationalNews.findAll({
        attributes: ["id", "publishedAt", "url", "createdAt", "updatedAt"],
        where: {
          publishedAt: {
            [Op.gt]: oneHourAgo,
          },
        },
        order: [["publishedAt", "DESC"]],
      });

      res.status(200).json(links);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
};

export default SitemapsController;
