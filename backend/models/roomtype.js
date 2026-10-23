'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roomType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  roomType.init({
    idRoom: DataTypes.STRING,
    hotelId: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    basePrice: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    totalInventory: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'roomType',
  });
  return roomType;
};