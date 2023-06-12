// Указание типа модуля для использования в Node.js
// Зависит от версии Node.js, используйте соответствующую версию
// Например, если используется Node.js 14 или новее:
// @ts-nocheck
@ts-check

// Используйте import вместо require
import { DataTypes } from 'sequelize';
import { QueryInterface, SequelizeStatic } from 'sequelize';

/**
 * Функция миграции "вверх"
 * @param {QueryInterface} queryInterface - Интерфейс запросов Sequelize
 * @param {SequelizeStatic} Sequelize - Класс Sequelize
 */
// Удалите модульную экспортацию и добавьте export перед каждой функцией миграции
export const up = async (queryInterface, Sequelize) => {
  await queryInterface.addColumn('national_news', 'main_img_desc', {
    type: DataTypes.STRING,
    allowNull: false
  });
  await queryInterface.addColumn('national_news', 'main_img_author', {
    type: DataTypes.STRING,
    allowNull: false
  });
};
/**
 * Функция миграции "вниз"
 * @param {QueryInterface} queryInterface - Интерфейс запросов Sequelize
 * @param {SequelizeStatic} Sequelize - Класс Sequelize
 */

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.removeColumn('national_news', 'main_img_desc');
  await queryInterface.removeColumn('national_news', 'main_img_author');
};
