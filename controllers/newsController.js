import { Op, Sequelize } from "sequelize";
import transliteration from "transliteration";
import models from "../data/FeedModels.js";
import NationalNews from "../models/nationalNews.js";
import Topic from "../models/topic.js";
import User from "../models/user.js";

const NewsController = {
  getAllNews: async (req, res) => {
    try {
      const posts = await NationalNews.findAll({
        order: [["publishedAt", "DESC"]],
      });
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  getAllNewsIncludeAttr: async (req, res) => {
    try {
      const posts = await NationalNews.findAll({
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
          "topicId",
        ],
        order: [["publishedAt", "DESC"]],
      });
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  getAllNewsWithLimitForPost: async (req, res) => {
    try {
      const societyPosts = await NationalNews.findAll({
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
        where: {
          section: "Суспільство",
        },
        limit: 50,
        order: [["publishedAt", "DESC"]],
      });
      const warSectionPosts = await NationalNews.findAll({
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
        where: {
          section: "Війна Росії проти України",
        },
        limit: 50,
        order: [["publishedAt", "DESC"]],
      });

      const europePosts = await NationalNews.findAll({
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
        where: {
          section: "Європа",
        },
        limit: 50,
        order: [["publishedAt", "DESC"]],
      });
      const freeLinePosts = await NationalNews.findAll({
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
        where: {
          block: "Стрічка новин",
        },
        limit: 50,
        order: [["publishedAt", "DESC"]],
      });

      const posts = {
        societyPosts: societyPosts,
        warSectionPosts: warSectionPosts,
        europePosts: europePosts,
        freeLinePosts: freeLinePosts,
      };
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  getAllNewsForHomepage: async (req, res) => {
    try {
      const newsData = [];

      const blocks = [
        { name: "Заголовок газети 24 години", limit: 1 },
        { name: "Головне сьогодні", limit: 10 },
        { name: "ТОП новини від Дейком", limit: 12 },
        { name: "Опублікувати в розділ", limit: 131 },
        { name: "Стрічка новин", limit: 50 },
      ];

      const currentTime = new Date();

      for (const block of blocks) {
        const posts = await NationalNews.findAll({
          where: {
            block: block.name,
            publishedAt: {
              [Sequelize.Op.lte]: currentTime,
            },
          },
          order: [["publishedAt", "DESC"]],
          limit: block.limit,
        });
        newsData.push(...posts);
      }

      res.status(200).json(newsData);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  getAllNewsByDate: async (req, res) => {
    const { date } = req.params;
    const startDate = new Date(date);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1);

    try {
      const posts = await NationalNews.findAll({
        where: {
          publishedAt: {
            [Op.between]: [startDate, endDate],
          },
        },
        order: [["publishedAt", "DESC"]],
      });
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Помилка сервера" });
    }
  },
  getNewsByIdOrURL: async (req, res) => {
    const param = req.params.param;
    try {
      let post;
      if (!isNaN(param)) {
        post = await NationalNews.findOne({
          where: { id: param },
        });
      } else {
        post = await NationalNews.findOne({ where: { url: param } });
      }
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Такого запису не знайдено" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Помилка серверу" });
    }
  },
  addNews: async (req, res) => {
    const postData = req.body;
    try {
      let existingTopic;
      const {
        publishedAt,
        feed,
        postType,
        block,
        section,
        title,
        desc,
        showDesc,
        mainImage,
        mainImgDesc,
        mainImgAuthor,
        imageSize,
        content,
        live,
        showAuthorDesc,
        showAuthor,
        publishOnSocialMedia,
        UserId,
        TopicId,
        topicName,
        topicIsVisible,
      } = postData;

      const requiredFields = [
        "publishedAt",
        "feed",
        "postType",
        "block",
        "section",
        "UserId",
        "title",
        "desc",
        "mainImage",
        "content",
      ];

      const missingFields = requiredFields.filter((field) => {
        const value = req.body[field];
        return (
          value === null ||
          value === undefined ||
          (typeof value === "string" && value.trim() === "")
        );
      });

      if (missingFields.length > 0) {
        const fieldDescriptions = {
          publishedAt: "Дату",
          feed: "Стрічку новин",
          postType: "Тип",
          block: "Блок",
          section: "Розділ",
          UserId: "Автора",
          title: "Заголовок",
          desc: "Короткий опис",
          mainImage: "Головне зображення",
          content: "Контент",
        };

        const missingFieldsDescriptions = missingFields.map(
          (field) => fieldDescriptions[field]
        );
        const missingFieldsMessage = missingFieldsDescriptions.join(", ");
        res.status(400).json({
          message: `Введіть дані: ${missingFieldsMessage} публікації`,
        });
        return;
      }

      const userExists = await User.findByPk(UserId);
      if (!userExists) {
        res.status(400).json({ message: "Такого автора не знайдено" });
        return;
      }

      const existingPost = await NationalNews.findOne({ where: { title } });

      if (existingPost) {
        res
          .status(400)
          .json({ message: "Публікація з таким заголовком вже існує" });
        return;
      }

      const updatedFeed = feed.slice(1);
      const feedString =
        updatedFeed.length === 0 ? feed[0] : updatedFeed.join(", ");

      // Пропустить проверку темы, если выбрана не загальнонаціональна стрічка
      if (feedString !== "Загальнонаціональна стрічка") {
        const ModelClass = models[feedString];

        if (!ModelClass) {
          res.status(400).json({ message: "Невірна категорія" });
          return;
        }

        const post = await ModelClass.create({
          publishedAt,
          postType,
          block,
          feed: feedString,
          section,
          title,
          url: transliteration.slugify(title),
          desc,
          showDesc,
          mainImage,
          mainImgDesc,
          mainImgAuthor,
          imageSize,
          content,
          live,
          showAuthorDesc,
          showAuthor,
          publishOnSocialMedia,
          UserId,
          topicId: null, // Установка темы в null, так как это не загальнонаціональна стрічка
        });

        res.status(200).json({
          post,
          message: "Новину успішно створено",
        });
        return;
      }

      let topicId = TopicId;

      if (topicId === null || topicId === undefined) {
        if (
          typeof topicName !== "undefined" &&
          topicName !== null &&
          topicName !== ""
        ) {
          existingTopic = await Topic.findOne({ where: { name: topicName } });

          if (!existingTopic) {
            const createdTopic = await Topic.create({
              name: topicName,
              is_visible: topicIsVisible,
            });

            topicId = createdTopic.id;
          } else {
            res.status(400).json({ message: "Тема з такою назвою вже існує" });
            return;
          }
        }
      }

      const url = transliteration.slugify(title);

      const ModelClass = models[feedString];

      if (!ModelClass) {
        res.status(400).json({ message: "Невірна категорія" });
        return;
      }

      const post = await ModelClass.create({
        publishedAt,
        postType,
        block,
        feed: feedString,
        section,
        title,
        url,
        desc,
        showDesc,
        mainImage,
        mainImgDesc,
        mainImgAuthor,
        imageSize,
        content,
        live,
        showAuthorDesc,
        showAuthor,
        publishOnSocialMedia,
        UserId,
        topicId: topicId,
      });

      if (topicId !== null && topicId !== undefined) {
        const existingTopic = await Topic.findByPk(topicId);

        if (existingTopic && existingTopic.first_news_id === null) {
          await Topic.update(
            { first_news_id: post.id, is_visible: topicIsVisible },
            { where: { id: topicId } }
          );
        }
      }

      if (topicName && !existingTopic) {
        await Topic.update(
          { first_news_id: post.id },
          { where: { id: topicId } }
        );
      }

      res.status(200).json({
        post,
        message: "Новину успішно створено",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  updateNews: async (req, res) => {
    const {
      id,
      publishedAt,
      postType,
      block,
      section,
      title,
      desc,
      showDesc,
      mainImage,
      mainImgDesc,
      mainImgAuthor,
      imageSize,
      content,
      live,
      showAuthorDesc,
      showAuthor,
      publishOnSocialMedia,
      UserId,
      topicId,
      topicName,
      topicIsVisible,
    } = req.body;

    try {
      const url = transliteration.slugify(title);

      let existingTopic;
      let updatedTopicId;

      if (topicName !== null && topicName !== undefined) {
        existingTopic = await Topic.findOne({ where: { name: topicName } });

        if (!existingTopic) {
          try {
            const createdTopic = await Topic.create({
              name: topicName,
              first_news_id: id,
              is_visible: topicIsVisible,
            });
            updatedTopicId = createdTopic.id;
          } catch (error) {
            res.status(500).json({ message: "Помилка створення теми" });
            return;
          }
        } else {
          res.status(400).json({ message: "Тема з такою назвою вже існує" });
          return;
        }
      } else if (topicId === null || topicId === undefined) {
        existingTopic = await Topic.findOne({ where: { first_news_id: id } });

        if (existingTopic && existingTopic.first_news_id == id) {
          await existingTopic.update({ first_news_id: null });
        }

        updatedTopicId = null;
      } else {
        updatedTopicId = topicId;

        existingTopic = await Topic.findOne({ where: { id: updatedTopicId } });

        if (existingTopic && existingTopic.first_news_id === null) {
          await existingTopic.update({ first_news_id: id });
        }
      }

      const updatedPost = await NationalNews.update(
        {
          publishedAt,
          postType,
          block,
          section,
          title,
          url,
          desc,
          showDesc,
          mainImage,
          mainImgDesc,
          mainImgAuthor,
          imageSize,
          content,
          live,
          showAuthorDesc,
          showAuthor,
          publishOnSocialMedia,
          UserId,
          topicId: updatedTopicId,
        },
        {
          where: { id },
        }
      );

      if (updatedPost[0]) {
        res.status(200).json({ message: "Стаття оновлена" });
      } else {
        res.status(404).json({ message: "Статті не знайдено" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Server error" });
    }
  },
  deleteNews: async (req, res) => {
    const id = req.params.id;
    try {
      const post = await NationalNews.destroy({ where: { id } });
      if (post) {
        res.status(200).json({ message: "Post deleted" });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },
};

export default NewsController;
