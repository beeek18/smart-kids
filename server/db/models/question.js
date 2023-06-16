const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Category, Option }) {
      this.belongsTo(Category, { foreignKey: 'categoryId' });
      this.hasMany(Option, { foreignKey: 'questionId' });
    }
  }
  Question.init(
    {
      title: DataTypes.STRING,
      answer: DataTypes.STRING,
      img: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );
  return Question;
};
