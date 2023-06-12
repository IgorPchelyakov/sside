import { DataTypes } from "sequelize";
import sequelize from "../../../DBConnect.js";

const Youzhne = sequelize.define('Youzhne', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    publishedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    feed: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    block: {
        type: DataTypes.STRING,
        allowNull: false
    },
    section: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    desc: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    showDesc: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    mainImage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageSize: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    live: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    showAuthorDesc: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    showAuthor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    publishOnSocialMedia: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    views: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize,
    modelName: 'youzhne',
    underscored: true,
})

export default Youzhne