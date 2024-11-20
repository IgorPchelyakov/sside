import { Op } from "sequelize";
import NationalNews from "../models/nationalNews.js";
import Topic from "../models/topic.js";
import User from "../models/user.js";

const TopicsController = {
  getTopicsName: async (req, res) => {
    try {
      const topics = await Topic.findAll();

      return res.status(200).json(topics);
    } catch (error) {
      console.error("Error fetching topics:", error);
      return res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
  },
  getNewsByTopics: async (req, res) => {
    try {
      const topicId = req.params.topicId;
      const id = req.params.id;
      const currentDateTime = new Date();

      const topic = await Topic.findByPk(topicId);

      if (!topic) {
        return res.status(404).json({ error: "Тема не найдена" });
      }

      const articles = await NationalNews.findAll({
        where: {
          topic_id: topic.id,
          id: { [Op.ne]: id },
          publishedAt: { [Op.lt]: currentDateTime },
        },
        include: [
          { model: Topic, as: "topic" },
          { model: User, attributes: ["id", "nickName", "avatarUrl"] },
        ],
        order: [["publishedAt", "DESC"]],
      });

      return res.status(200).json(articles);
    } catch (error) {
      console.error("Error fetching articles by topic:", error);
      return res.status(500).json({ error: "Помилка серверу" });
    }
  },
  getThemesPg: async (req, res) => {
    try {
      const { topicId, newsId, page, limit } = req.query;
      const MAX_LIMIT = 100;
      console.log(page);

      const pageNumber = parseInt(page) || 1;
      const limitNumber = parseInt(limit, 10) || 30;
      const offset = (pageNumber - 1) * limitNumber;
      const currentDateTime = new Date();

      const topic = await Topic.findByPk(topicId);

      if (!topic) {
        return res.status(404).json({ error: "Тема не знайдена" });
      }

      const { count, rows } = await NationalNews.findAndCountAll({
        where: {
          topic_id: topic.id,
          id: { [Op.ne]: newsId },
          publishedAt: { [Op.lt]: currentDateTime },
        },
        include: [
          { model: Topic, as: "topic" },
          { model: User, attributes: ["id", "nickName", "avatarUrl"] },
        ],
        order: [["publishedAt", "DESC"]],
        limit: limitNumber,
        offset: offset,
      });

      const totalPages = Math.ceil(count / limitNumber);
      return res.status(200).json({
        data: rows,
        totalPages: totalPages,
        currentPage: page,
        totalItems: count,
      });
    } catch (error) {
      console.error("Error fetching articles by topic:", error);
      return res.status(500).json({ error: "Помилка серверу" });
    }
  },
  getTopicById: async (req, res) => {
    try {
      const topicId = req.params.topicId;

      const topic = await Topic.findByPk(topicId);

      if (!topic) {
        return res.status(404).json({ error: "Тема не найдена" });
      }

      return res.status(200).json(topic);
    } catch (error) {
      console.error("Error fetching articles by topic:", error);
      return res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
  },
  getAllTopics: async (req, res) => {
    try {
      const topicsWithNews = await Topic.findAll({
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: NationalNews,
            as: "national_news",
            attributes: ["id", "main_image", "title"],
          },
        ],
      });

      return res.status(200).json(topicsWithNews);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: error.message || "Внутрішня помилка серверу" });
    }
  },
  editTopic: async (req, res) => {
    const { id, first_news_id } = req.body;
    try {
      const editMainTopic = await Topic.update(
        {
          first_news_id: first_news_id,
        },
        {
          where: { id: id },
        }
      );

      if (editMainTopic[0] > 0) {
        res.status(200).json({ message: "Стаття оновлена" });
      } else {
        res.status(404).json({ message: "Стаття не знайдена або не оновлена" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Server error" });
    }
  },
};

export default TopicsController;
