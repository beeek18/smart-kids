const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Friendship extends Model {
    static associate(models) {}
  }
  Friendship.init(
    {
      subjectUserId: DataTypes.INTEGER,
      objectUserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Friendship',
    },
  );
  return Friendship;
};
