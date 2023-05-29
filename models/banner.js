import { DataTypes } from "sequelize";
import sequelize from "../DBConnect.js";

const Banner = sequelize.define('Banner', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    block: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    desktop: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    urlOpen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publishAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endAt: {
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