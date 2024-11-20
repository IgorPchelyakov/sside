import { DataTypes } from "sequelize";
import sequelize from "../DBConnect.js";
import Topic from "./topic.js";

const NationalNews = sequelize.define(
  "NationalNews",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    feed: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    block: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    section: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    showDesc: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    mainImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mainImgDesc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mainImgAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageSize: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    content: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    live: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    showAuthorDesc: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    showAuthor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    publishOnSocialMedia: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    topicId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "national_news",
    underscored: true,
  }
);

NationalNews.belongsTo(Topic, { foreignKey: "topicId", as: "topic" });
Topic.hasMany(NationalNews, { foreignKey: "topicId", as: "national_news" });

export default NationalNews;
