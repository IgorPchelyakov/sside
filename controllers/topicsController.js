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
      return res.status(500).json({ error: "Внутренняя ошибка сервера" });
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
        include: [
          {
            model: NationalNews,
            as: "national_news",
            attributes: ["id", "main_image"],
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
};

export default TopicsController;
