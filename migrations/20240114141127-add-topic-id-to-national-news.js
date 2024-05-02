import { DataTypes } from "sequelize";

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('national_news', 'topicId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'topics',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('national_news', 'topicId');
  },
};