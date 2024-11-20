import moment from "moment/moment.js";
import { Op, Sequelize } from "sequelize";
import transliteration from "transliteration";
import Banner from "../models/banners/banner.js";
import { City } from "../models/location/CountryRegionCity.js";
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

      if (post && post.topicId) {
        const topic = await Topic.findOne({
          where: { id: post.topicId },
        });

        if (topic) {
          post.dataValues.topicTitle = topic.name || null;
          const mainArticle = await NationalNews.findOne({
            where: { id: topic.first_news_id },
            attributes: ["id", "url"],
          });

          if (mainArticle) {
            post.dataValues.mainArticle = mainArticle;
          }
        }
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
      // const feedString =
      //   updatedFeed.length === 0 ? feed[0] : updatedFeed.join(", ");

      // Пропустить проверку темы, если выбрана не загальнонаціональна стрічка
      // if (feedString !== "Загальнонаціональна стрічка") {
      //   // const ModelClass = models[feedString];

      //   // if (!ModelClass) {
      //   //   res.status(400).json({ message: "Невірна категорія" });
      //   //   return;
      //   // }

      //   const post = await NationalNews.create({
      //     // const post = await ModelClass.create({
      //     publishedAt,
      //     postType,
      //     block,
      //     // feed: feedString,
      //     feed,
      //     section,
      //     title,
      //     url: transliteration.slugify(title),
      //     desc,
      //     showDesc,
      //     mainImage,
      //     mainImgDesc,
      //     mainImgAuthor,
      //     imageSize,
      //     content,
      //     live,
      //     showAuthorDesc,
      //     showAuthor,
      //     publishOnSocialMedia,
      //     UserId,
      //     topicId: null, // Установка темы в null, так как это не загальнонаціональна стрічка
      //   });

      //   res.status(200).json({
      //     post,
      //     message: "Новину успішно створено",
      //   });
      //   return;
      // }

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

      // const post = await NationalNews.create({});

      // const ModelClass = models[feedString];

      // if (!ModelClass) {
      //   res.status(400).json({ message: "Невірна категорія" });
      //   return;
      // }

      // const JSONFeed = JSON.stringify(feed);
      const feedString = Array.isArray(feed) ? feed.join(", ") : feed;

      // const post = await ModelClass.create({
      const post = await NationalNews.create({
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
      feed,
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
          if (topicIsVisible !== undefined) {
            await existingTopic.update({ is_visible: topicIsVisible });
          }
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

        if (existingTopic) {
          if (existingTopic.first_news_id === null) {
            await existingTopic.update({ first_news_id: id });
          }
          if (topicIsVisible !== undefined) {
            await existingTopic.update({ is_visible: topicIsVisible });
          }
        }
      }

      const feedString = Array.isArray(feed) ? feed.join(", ") : feed;

      const updatedPost = await NationalNews.update(
        {
          publishedAt,
          feed: feedString,
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
  getNationalOrCityNews: async (req, res) => {
    const { feed } = req.query;

    try {
      const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");

      // const groupLimits = {
      //   mainToday: 10,
      //   topNews: 12,
      //   lineNews: 50,
      //   hotNews: 1,
      //   warRussianVsUkraine: 5,
      //   society: 4,
      //   europe: 10,
      //   china: 2,
      //   usa: 3,
      //   economyFinance: 2,
      //   technology: 10,
      //   science: 4,
      //   cultureMusicCinema: 10,
      //   sports: 4,
      //   politicsGovernment: 5,
      //   americas: 5,
      //   middleEast: 5,
      //   pacific: 5,
      //   africa: 5,
      //   opinion: 10,
      //   analytics: 10,
      // };

      // const blockDefinitions = {
      //   mainToday: { block: { [Op.like]: "%Головне сьогодні%" } },
      //   topNews: { block: { [Op.like]: "%ТОП новини від Дейком%" } },
      //   lineNews: { block: { [Op.like]: "%Стрічка новин%" } },
      //   hotNews: { block: { [Op.like]: "%Заголовок газети 24 години%" } },
      // };
      // const sectionDefinitions = {
      //   warRussianVsUkraine: {
      //     section: { [Op.like]: "%Війна Росії проти України%" },
      //   },
      //   warRussianVsUkraine: {
      //     section: { [Op.like]: "%Війна Росії проти України%" },
      //   },
      //   society: { section: { [Op.like]: "%Суспільство%" } },
      //   europe: { section: { [Op.like]: "%Європа%" } },
      //   china: { section: { [Op.like]: "%Китай%" } },
      //   usa: { section: { [Op.like]: "%Сполучені Штати%" } },
      //   economyFinance: {
      //     [Op.or]: [
      //       { section: { [Op.like]: "%Економіка%" } },
      //       { section: { [Op.like]: "%Фінанси%" } },
      //     ],
      //   },
      //   technology: { section: { [Op.like]: "%Технології%" } },
      //   science: { section: { [Op.like]: "%Наука%" } },
      //   cultureMusicCinema: {
      //     [Op.or]: [
      //       { section: { [Op.like]: "%Культура%" } },
      //       { section: { [Op.like]: "%Музика%" } },
      //       { section: { [Op.like]: "%Кіно%" } },
      //     ],
      //   },
      //   sports: { section: { [Op.like]: "%Спорт%" } },
      //   politicsGovernment: {
      //     [Op.or]: [
      //       { section: { [Op.like]: "%Політика%" } },
      //       { section: { [Op.like]: "%Влада%" } },
      //     ],
      //   },
      //   americas: {
      //     [Op.or]: [
      //       { section: { [Op.like]: "%Північна Америка%" } },
      //       { section: { [Op.like]: "%Південна Америка%" } },
      //     ],
      //   },
      //   middleEast: { section: { [Op.like]: "%Близький схід%" } },
      //   pacific: { section: { [Op.like]: "%Тихоокеанський регіон%" } },
      //   africa: { section: { [Op.like]: "%Африка%" } },
      //   opinion: { section: { [Op.like]: "%Думка%" } },
      //   analytics: { section: { [Op.like]: "%Аналітика%" } },
      // };

      // const pageSize = 1000;

      // const blockPromises = Object.entries(blockDefinitions).map(
      //   ([group, criteria]) =>
      //     NationalNews.findAll({
      //       where: {
      //         feed: {
      //           [Op.like]: "%Загальнонаціональна стрічка%",
      //         },
      //         ...criteria,
      //         publishedAt: {
      //           [Op.lte]: currentDate,
      //         },
      //       },
      //       order: [["publishedAt", "DESC"]],
      //       limit: pageSize,
      //       attributes: [
      //         "id",
      //         "publishedAt",
      //         "feed",
      //         "url",
      //         "postType",
      //         "block",
      //         "section",
      //         "title",
      //         "desc",
      //         "mainImage",
      //         "mainImgDesc",
      //         "mainImgAuthor",
      //         "UserId",
      //         "topicId",
      //       ],
      //     }).then((results) => ({
      //       group,
      //       records: results.map((record) => record.toJSON()),
      //     }))
      // );

      // const blockResults = await Promise.all(blockPromises);
      // const blockRecords = blockResults.flatMap(({ group, records }) =>
      //   records.map((record) => ({ ...record, group }))
      // );

      // const sectionPromises = Object.entries(sectionDefinitions).map(
      //   ([group, criteria]) =>
      //     NationalNews.findAll({
      //       where: {
      //         feed: {
      //           [Op.like]: "%Загальнонаціональна стрічка%",
      //         },
      //         ...criteria,
      //         publishedAt: {
      //           [Op.lte]: currentDate,
      //         },
      //       },
      //       order: [["publishedAt", "DESC"]],
      //       limit: pageSize,
      //       attributes: [
      //         "id",
      //         "publishedAt",
      //         "feed",
      //         "url",
      //         "postType",
      //         "block",
      //         "section",
      //         "title",
      //         "desc",
      //         "mainImage",
      //         "mainImgDesc",
      //         "mainImgAuthor",
      //         "UserId",
      //         "topicId",
      //       ],
      //     }).then((results) => ({
      //       group,
      //       records: results.map((record) => record.toJSON()),
      //     }))
      // );

      // const sectionResults = await Promise.all(sectionPromises);
      // const sectionRecords = sectionResults.flatMap(({ group, records }) =>
      //   records.map((record) => ({ ...record, group }))
      // );

      // const blockIds = new Set(blockRecords.map((record) => record.id));
      // const filteredSectionRecords = sectionRecords.filter(
      //   (record) => !blockIds.has(record.id)
      // );

      // const allRecords = [...blockRecords, ...filteredSectionRecords];

      // const uniqueRecords = Array.from(
      //   new Map(allRecords.map((item) => [item.id, item])).values()
      // );

      // const groupedResults = Object.keys(groupLimits).reduce((acc, group) => {
      //   acc[group] = [];
      //   return acc;
      // }, {});

      // const remainingRecords = [...uniqueRecords];

      // Object.keys(groupLimits).forEach((group) => {
      //   const limit = groupLimits[group];
      //   const filtered = remainingRecords.filter(
      //     (record) => record.group === group
      //   );
      //   groupedResults[group] = filtered.slice(0, limit);
      // });

      // const feedPreferences = await City.findOne({
      //   where: {
      //     name: feed,
      //   },
      // });

      // const banners = await Banner.findAll({
      //   where: {
      //     start_date: {
      //       [Op.lte]: currentDate,
      //     },
      //     end_date: {
      //       [Op.gte]: currentDate,
      //     },
      //   },
      // });

      // let feedData = {};
      // if (feed !== "Загальнонаціональна стрічка") {
      //   feedData = await NationalNews.findAll({
      //     where: {
      //       feed: {
      //         [Op.like]: `%${feed}%`,
      //       },
      //       publishedAt: {
      //         [Op.lte]: currentDate,
      //       },
      //     },
      //     order: [["publishedAt", "DESC"]],
      //     limit: pageSize,
      //     attributes: [
      //       "id",
      //       "publishedAt",
      //       "feed",
      //       "url",
      //       "postType",
      //       "block",
      //       "section",
      //       "title",
      //       "desc",
      //       "mainImage",
      //       "mainImgDesc",
      //       "mainImgAuthor",
      //       "UserId",
      //       "topicId",
      //     ],
      //     limit: 100,
      //   });
      // }

      // const groupLimits = {
      //   mainToday: 10,
      //   topNews: 12,
      //   lineNews: 50,
      //   hotNews: 1,
      //   warRussianVsUkraine: 5,
      //   society: 4,
      //   europe: 10,
      //   china: 2,
      //   usa: 3,
      //   economyFinance: 2,
      //   technology: 10,
      //   science: 4,
      //   cultureMusicCinema: 10,
      //   sports: 4,
      //   politicsGovernment: 5,
      //   americas: 5,
      //   middleEast: 5,
      //   pacific: 5,
      //   africa: 5,
      //   opinion: 10,
      //   analytics: 10,
      // };

      // const criteriaDefinitions = {
      //   mainToday: { [Op.like]: "%Головне сьогодні%" },
      //   topNews: { [Op.like]: "%ТОП новини від Дейком%" },
      //   lineNews: { [Op.like]: "%Стрічка новин%" },
      //   hotNews: { [Op.like]: "%Заголовок газети 24 години%" },
      //   warRussianVsUkraine: { [Op.like]: "%Війна Росії проти України%" },
      //   society: { [Op.like]: "%Суспільство%" },
      //   europe: { [Op.like]: "%Європа%" },
      //   china: { [Op.like]: "%Китай%" },
      //   usa: { [Op.like]: "%Сполучені Штати%" },
      //   economyFinance: {
      //     [Op.or]: [{ [Op.like]: "%Економіка%" }, { [Op.like]: "%Фінанси%" }],
      //   },
      //   technology: { [Op.like]: "%Технології%" },
      //   science: { [Op.like]: "%Наука%" },
      //   cultureMusicCinema: {
      //     [Op.or]: [
      //       { [Op.like]: "%Культура%" },
      //       { [Op.like]: "%Музика%" },
      //       { [Op.like]: "%Кіно%" },
      //     ],
      //   },
      //   sports: { [Op.like]: "%Спорт%" },
      //   politicsGovernment: {
      //     [Op.or]: [{ [Op.like]: "%Політика%" }, { [Op.like]: "%Влада%" }],
      //   },
      //   americas: {
      //     [Op.or]: [
      //       { [Op.like]: "%Північна Америка%" },
      //       { [Op.like]: "%Південна Америка%" },
      //     ],
      //   },
      //   middleEast: { [Op.like]: "%Близький схід%" },
      //   pacific: { [Op.like]: "%Тихоокеанський регіон%" },
      //   africa: { [Op.like]: "%Африка%" },
      //   opinion: { [Op.like]: "%Думка%" },
      //   analytics: { [Op.like]: "%Аналітика%" },
      // };

      // const newsPromises = Object.entries(criteriaDefinitions).map(
      //   ([group, criteria]) =>
      //     NationalNews.findAll({
      //       where: {
      //         feed: {
      //           [Op.like]: "%Загальнонаціональна стрічка%",
      //         },
      //         section: criteria,
      //         publishedAt: {
      //           [Op.lte]: currentDate,
      //         },
      //       },
      //       order: [["publishedAt", "DESC"]],
      //       attributes: [
      //         "id",
      //         "publishedAt",
      //         "feed",
      //         "url",
      //         "postType",
      //         "block",
      //         "section",
      //         "title",
      //         "desc",
      //         "mainImage",
      //         "mainImgDesc",
      //         "mainImgAuthor",
      //         "UserId",
      //         "topicId",
      //       ],
      //     }).then((results) => ({
      //       group,
      //       records: results.map((record) => record.toJSON()),
      //     }))
      // );

      // const newsResults = await Promise.all(newsPromises);
      // const allRecords = newsResults.flatMap(({ group, records }) =>
      //   records.map((record) => ({ ...record, group }))
      // );

      // const groupedResults = Object.keys(groupLimits).reduce((acc, group) => {
      //   const limit = groupLimits[group];
      //   const filtered = allRecords.filter((record) => record.group === group);
      //   acc[group] = filtered.slice(0, limit);
      //   return acc;
      // }, {});

      // const feedPreferences = await City.findOne({
      //   where: {
      //     name: feed,
      //   },
      // });

      // const banners = await Banner.findAll({
      //   where: {
      //     start_date: {
      //       [Op.lte]: currentDate,
      //     },
      //     end_date: {
      //       [Op.gte]: currentDate,
      //     },
      //   },
      // });

      // let feedData = {};
      // if (feed !== "Загальнонаціональна стрічка") {
      //   feedData = await NationalNews.findAll({
      //     where: {
      //       feed: {
      //         [Op.like]: `%${feed}%`,
      //       },
      //       publishedAt: {
      //         [Op.lte]: currentDate,
      //       },
      //     },
      //     order: [["publishedAt", "DESC"]],
      //     attributes: [
      //       "id",
      //       "publishedAt",
      //       "feed",
      //       "url",
      //       "postType",
      //       "block",
      //       "section",
      //       "title",
      //       "desc",
      //       "mainImage",
      //       "mainImgDesc",
      //       "mainImgAuthor",
      //       "UserId",
      //       "topicId",
      //     ],
      //   });
      // }

      const groupLimits = {
        mainToday: 10,
        topNews: 12,
        lineNews: 50,
        hotNews: 1,
        warRussianVsUkraine: 5,
        society: 4,
        europe: 10,
        china: 2,
        usa: 3,
        economyFinance: 2,
        technology: 10,
        science: 4,
        cultureMusicCinema: 10,
        sports: 4,
        politicsGovernment: 5,
        americas: 5,
        middleEast: 5,
        pacific: 5,
        africa: 5,
        opinion: 10,
        analytics: 10,
      };

      const blockDefinitions = {
        mainToday: { block: { [Op.like]: "%Головне сьогодні%" } },
        topNews: { block: { [Op.like]: "%ТОП новини від Дейком%" } },
        lineNews: { block: { [Op.like]: "%Стрічка новин%" } },
        hotNews: { block: { [Op.like]: "%Заголовок газети 24 години%" } },
      };
      const sectionDefinitions = {
        warRussianVsUkraine: {
          section: { [Op.like]: "%Війна Росії проти України%" },
        },
        warRussianVsUkraine: {
          section: { [Op.like]: "%Війна Росії проти України%" },
        },
        society: { section: { [Op.like]: "%Суспільство%" } },
        europe: { section: { [Op.like]: "%Європа%" } },
        china: { section: { [Op.like]: "%Китай%" } },
        usa: { section: { [Op.like]: "%Сполучені Штати%" } },
        economyFinance: {
          [Op.or]: [
            { section: { [Op.like]: "%Економіка%" } },
            { section: { [Op.like]: "%Фінанси%" } },
          ],
        },
        technology: { section: { [Op.like]: "%Технології%" } },
        science: { section: { [Op.like]: "%Наука%" } },
        cultureMusicCinema: {
          [Op.or]: [
            { section: { [Op.like]: "%Культура%" } },
            { section: { [Op.like]: "%Музика%" } },
            { section: { [Op.like]: "%Кіно%" } },
          ],
        },
        sports: { section: { [Op.like]: "%Спорт%" } },
        politicsGovernment: {
          [Op.or]: [
            { section: { [Op.like]: "%Політика%" } },
            { section: { [Op.like]: "%Влада%" } },
          ],
        },
        americas: {
          [Op.or]: [
            { section: { [Op.like]: "%Північна Америка%" } },
            { section: { [Op.like]: "%Південна Америка%" } },
          ],
        },
        middleEast: { section: { [Op.like]: "%Близький схід%" } },
        pacific: { section: { [Op.like]: "%Тихоокеанський регіон%" } },
        africa: { section: { [Op.like]: "%Африка%" } },
        opinion: { section: { [Op.like]: "%Думка%" } },
        analytics: { section: { [Op.like]: "%Аналітика%" } },
      };
      const blockPromises = Object.entries(blockDefinitions).map(
        ([group, criteria]) =>
          NationalNews.findAll({
            where: {
              feed: {
                [Op.like]: "%Загальнонаціональна стрічка%",
              },
              ...criteria,
              publishedAt: {
                [Op.lte]: currentDate,
              },
            },
            order: [["publishedAt", "DESC"]],
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
          }).then((results) => ({
            group,
            records: results.map((record) => record.toJSON()),
          }))
      );

      const blockResults = await Promise.all(blockPromises);
      const blockRecords = blockResults.flatMap(({ group, records }) =>
        records.map((record) => ({ ...record, group }))
      );

      const sectionPromises = Object.entries(sectionDefinitions).map(
        ([group, criteria]) =>
          NationalNews.findAll({
            where: {
              feed: {
                [Op.like]: "%Загальнонаціональна стрічка%",
              },
              ...criteria,
              publishedAt: {
                [Op.lte]: currentDate,
              },
            },
            order: [["publishedAt", "DESC"]],
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
          }).then((results) => ({
            group,
            records: results.map((record) => record.toJSON()),
          }))
      );

      const sectionResults = await Promise.all(sectionPromises);
      const sectionRecords = sectionResults.flatMap(({ group, records }) =>
        records.map((record) => ({ ...record, group }))
      );

      const allRecords = [...blockRecords, ...sectionRecords];

      const groupedResults = Object.keys(groupLimits).reduce((acc, group) => {
        acc[group] = [];
        return acc;
      }, {});

      Object.keys(groupLimits).forEach((group) => {
        const limit = groupLimits[group];
        const filtered = allRecords.filter((record) => record.group === group);
        groupedResults[group] = filtered.slice(0, limit);
      });

      const feedPreferences = await City.findOne({
        where: {
          name: feed,
        },
      });

      const banners = await Banner.findAll({
        where: {
          start_date: {
            [Op.lte]: currentDate,
          },
          end_date: {
            [Op.gte]: currentDate,
          },
        },
      });

      let feedData = {};
      if (feed !== "Загальнонаціональна стрічка") {
        feedData = await NationalNews.findAll({
          where: {
            feed: {
              [Op.like]: `%${feed}%`,
            },
            publishedAt: {
              [Op.lte]: currentDate,
            },
          },
          order: [["publishedAt", "DESC"]],
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
        });
      }

      res.status(200).json({
        message: "Дані отримано успішно",
        data: groupedResults,
        feedData: feed !== "Загальнонаціональна стрічка" ? feedData : null,
        feedPreferences: feedPreferences,
        bannersData: banners,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: `Помилка серверу ${error}` });
    }
  },
  getNewsByUrlNationalOrCityNews: async (req, res) => {
    try {
      const { url } = req.query;

      if (!url) {
        return res.status(400).json({ message: "Missing 'url' parameter" });
      }

      const news = await NationalNews.findOne({
        where: { url: url },
        include: [{ model: User }],
      });

      if (!news) {
        return res.status(404).json({ message: "News post not found" });
      }
      return res.status(200).json(news);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  },
  getNewsWithPagination: async (req, res) => {
    try {
      const {
        page,
        limit,
        section,
        startDate,
        endDate,
        authorId,
        feed,
        search,
      } = req.query;
      const MAX_LIMIT = 100;

      console.log(
        page,
        limit,
        section,
        startDate,
        endDate,
        authorId,
        feed,
        search
      );

      let pageNumber = parseInt(page, 10) || 1;
      let limitNumber = parseInt(limit, 10);
      let filterConditions = {};

      pageNumber = pageNumber < 1 ? 1 : pageNumber;

      limitNumber = isNaN(limitNumber) || limitNumber <= 0 ? 35 : limitNumber;
      limitNumber = limitNumber > MAX_LIMIT ? MAX_LIMIT : limitNumber;

      if (section) {
        filterConditions.section = section;
      }

      if (feed) {
        filterConditions["feed"] = {
          [Sequelize.Op.like]: `%${feed}%`,
        };
      }

      if (startDate && endDate) {
        const adjustedStartDate = new Date(startDate);
        adjustedStartDate.setHours(0, 0, 0, 0);

        const adjustedEndDate = new Date(endDate);
        adjustedEndDate.setHours(23, 59, 59, 999);

        filterConditions["publishedAt"] = {
          [Sequelize.Op.between]: [adjustedStartDate, adjustedEndDate],
        };
      }

      if (authorId) {
        filterConditions["$User.id$"] = authorId;
      }

      if (search) {
        filterConditions[Sequelize.Op.or] = [
          { title: { [Sequelize.Op.like]: `%${search}%` } },
          { desc: { [Sequelize.Op.like]: `%${search}%` } },
        ];
      }

      const recordQuantity = await NationalNews.count({
        where: filterConditions,
        include: [
          {
            model: User,
            required: false,
          },
        ],
      });

      if (!recordQuantity) {
        return res.json({ message: "Немає новин" });
      }

      const totalPages = Math.ceil(recordQuantity / limitNumber);
      pageNumber = pageNumber > totalPages ? totalPages : pageNumber;
      const offset = (pageNumber - 1) * limitNumber;

      const news = await NationalNews.findAll({
        limit: limitNumber,
        offset: offset,
        order: [["publishedAt", "DESC"]],
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
          "live",
          "createdAt",
          "updatedAt",
        ],
        include: [
          {
            model: User,
            required: false,
            attributes: [
              "id",
              "firstName",
              "middleName",
              "lastName",
              "avatarUrl",
            ],
          },
        ],
        where: filterConditions,
      });

      return res.json({
        page: pageNumber,
        totalPages: totalPages,
        limit: limitNumber,
        success: true,
        news: news,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Виникла помилка при отриманні новин" });
    }
  },
};

export default NewsController;
