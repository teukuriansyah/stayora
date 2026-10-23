'use strict';
import { Model } from "sequelize"

export default (sequelize, DataTypes) => {
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
    idHotel: DataTypes.STRING,
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