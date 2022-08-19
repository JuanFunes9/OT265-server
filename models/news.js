'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      News.belongsTo(models.Category, {as: 'category'});
    }
  };
  News.init({
    name: DataTypes.STRING,
    content: DataTypes.Text,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'News',
    paranoid: true
  });
  return News;
};