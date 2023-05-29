import { DataTypes } from "sequelize";
import sequelize from "../DBConnect.js";

const Post = sequelize.define('Post', {
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
        type: DataTypes.ARRAY(DataTypes.STRING),
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
    modelName: 'post',
    underscored: true,
})

export default Post