import { DataTypes } from "sequelize";
import sequelize from "../DBConnect.js";

const Topic = sequelize.define('Topic', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    first_news_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    is_visible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    sequelize,
    modelName: 'topic',
    underscored: true,
    timestamps: true,
});

export default Topic;