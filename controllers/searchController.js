import { Op, Sequelize } from "sequelize";
import NationalNews from "../models/nationalNews.js";

const SearchController = {
  searchNationalNews: async (req, res) => {
    const { query } = req.query;

    try {
      const posts = await NationalNews.findAll({
        where: {
          [Op.or]: [
            Sequelize.where(
              Sequelize.fn("LOWER", Sequelize.col("title")),
              "LIKE",
              `%${query.toLowerCase()}%`
            ),
            Sequelize.where(
              Sequelize.fn("LOWER", Sequelize.col("desc")),
              "LIKE",
              `%${query.toLowerCase()}%`
            ),
          ],
        },
        attributes: [
          "id",
          "publishedAt",
          "feed",
          "url",
          "postType",
          "block",
          "section",
          "title",
          "desc",
          "mainImage",
          "mainImgDesc",
          "mainImgAuthor",
          "UserId",
        ],
        order: [["publishedAt", "DESC"]],
      });

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
};

export default SearchController;
