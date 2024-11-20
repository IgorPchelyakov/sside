import { DataTypes } from "sequelize";
import sequelize from "../../DBConnect.js";

const BannerMedia = sequelize.define(
  "BannerMedia",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "banner_media",
    timestamps: true,
    underscored: true,
  }
);

export default BannerMedia;
