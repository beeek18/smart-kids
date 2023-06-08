const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    static associate({ Question }) {
      this.belongsTo(Question, { foreignKey: 'questionId' });
    }
  }
  Option.init(
    {
      title: DataTypes.STRING,
      questionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Option',
    },
  );
  return Option;
};
