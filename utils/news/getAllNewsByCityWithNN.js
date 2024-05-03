import { Op, Sequelize } from "sequelize";
import transliteration from "transliteration";
import NationalNews from "../../models/nationalNews.js";

export const getAllNewsByCityWithNN = async (Model) => {
  try {
    const nationalNews = await NationalNews.findAll({
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
        ["user_id", "UserId"],
      ],
      order: [["publishedAt", "DESC"]],
    });

    const cityNews = await Model.findAll({
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
        ["user_id", "UserId"],
      ],
      order: [["publishedAt", "DESC"]],
    });

    const posts = nationalNews.concat(cityNews);
    posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Помилка серверу");
  }
};

export const getAllNewsByCity = async (Model) => {
  try {
    const posts = await Model.findAll({
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
        ["user_id", "UserId"],
      ],
      order: [["publishedAt", "DESC"]],
    });

    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Помилка серверу");
  }
};

export const GetNewsByIdOrUrl = async (Model, param) => {
  try {
    let post;
    if (!isNaN(param)) {
      post = await Model.findOne({
        where: { id: param },
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
          "showDesc",
          "mainImage",
          "mainImgDesc",
          "mainImgAuthor",
          "content",
          "live",
          "showAuthorDesc",
          "showAuthor",
          "publishOnSocialMedia",
          "createdAt",
          "updatedAt",
          ["user_id", "UserId"],
        ],
      });
    } else {
      post = await Model.findOne({
        where: { url: param },
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
          "showDesc",
          "mainImage",
          "mainImgDesc",
          "mainImgAuthor",
          "content",
          "live",
          "showAuthorDesc",
          "showAuthor",
          "publishOnSocialMedia",
          "createdAt",
          "updatedAt",
          ["user_id", "UserId"],
        ],
      });
    }
    if (post) {
      return post;
    } else {
      throw new Error("Пост не знайдено");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Помилка сервера");
  }
};

export const GetNewsByDate = async (Model, param) => {
  try {
    if (!param) {
      throw new Error("Не вказана дата");
    }

    const startDate = new Date(param);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 1);
    const posts = await Model.findAll({
      where: {
        publishedAt: {
          [Op.between]: [startDate, endDate],
        },
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
        ["user_id", "UserId"],
      ],
      order: [["publishedAt", "DESC"]],
    });

    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Помилка сервера");
  }
};

export const updateNews = async (Model, data, res) => {
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
  } = data;
  try {
    const url = transliteration.slugify(title);
    const post = await Model.update(
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
      },
      {
        where: { id },
      }
    );

    if (post[0]) {
      res.status(200).json({ message: "Пост успішно оновлено" });
    } else {
      res.status(404).json({ message: "Пост не знайдено" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Помилка серверу" });
  }
};

export const deleteNews = async (Model, id, res) => {
  try {
    const post = await Model.destroy({ where: { id } });

    if (post) {
      res.status(200).json({ message: "Пост успішно видалено" });
    } else {
      res.status(404).json({ message: "Пост не знайдено" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Помилка серверу" });
  }
};

export const searchNews = async (Model, req, res) => {
  try {
    const { query } = req.query;
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
    const news = await Model.findAll({
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
    console.log(error);
    res.status(500).json({ message: "Помилка серверу" });
  }
};
