import { Op, Sequelize } from "sequelize";
import Dnipro from "../models/feeds/regionDnipro/dnipro.js";
import Kamianske from "../models/feeds/regionDnipro/kamianske.js";
import KryvyiRih from "../models/feeds/regionDnipro/kryvyi-rih.js";
import Marganets from "../models/feeds/regionDnipro/marganets.js";
import Nikopol from "../models/feeds/regionDnipro/nikopol.js";
import Novomoskovsk from "../models/feeds/regionDnipro/novomoskovsk.js";
import Pavlograd from "../models/feeds/regionDnipro/pavlograd.js";
import Pershotravensk from "../models/feeds/regionDnipro/pershotravensk.js";
import Pokrov from "../models/feeds/regionDnipro/pokrov.js";
import Pyatihatky from "../models/feeds/regionDnipro/pyatihatky.js";
import Sinelnikovo from "../models/feeds/regionDnipro/sinelnikovo.js";
import Ternivka from "../models/feeds/regionDnipro/ternivka.js";
import Vilnohorsk from "../models/feeds/regionDnipro/vilnohorsk.js";
import ZhovtiVody from "../models/feeds/regionDnipro/zhovti-vody.js";
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
  // Dnipro
  searchDniproNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await Dnipro.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // Kamianske
  searchKamianskeNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await Kamianske.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // KryvyiRih
  searchKryvyiRihNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await KryvyiRih.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // Marganets
  searchMarganetsNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await Marganets.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // Nikopol
  searchNikopolNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await Nikopol.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // Novomoskovsk
  searchNovomoskovskNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await Novomoskovsk.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // Pavlograd
  searchPavlogradNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await Pavlograd.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // Pershotravensk
  searchPershotravenskNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await Pershotravensk.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // Pokrov
  searchPokrovNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await Pokrov.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // Pyatihatky
  searchPyatihatkyNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await Pyatihatky.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // Sinelnikovo
  searchSinelnikovoNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await Sinelnikovo.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // Ternivka
  searchTernivkaNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await Ternivka.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // Vilnohorsk
  searchVilnohorskNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await Vilnohorsk.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
  // ZhovtiVody
  searchZhovtiVodyNews: async (req, res) => {
    const { query } = req.query;

    try {
      const nationalNews = await NationalNews.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const news = await ZhovtiVody.findAll({
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
        order: [["publishedAt", "DESC"]],
      });

      const posts = nationalNews.concat(news);
      posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({
        message: "Помилка серверу",
      });
    }
  },
};

export default SearchController;
