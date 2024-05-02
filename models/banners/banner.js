import { DataTypes } from "sequelize";
import sequelize from "../../DBConnect.js";

const Banner = sequelize.define('Banner', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    images: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    headlines: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    descriptions: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    advertiserLinks: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    newsFeed: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bannerType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blockTypes: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    version: {
        type: DataTypes.ENUM('mobile', 'desktop', 'mobile-desktop'),
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'banner',
    timestamps: true,
    underscored: true,
})

export default Banner