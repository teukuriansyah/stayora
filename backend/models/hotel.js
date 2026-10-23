'use strict';
import { Model } from "sequelize"

export default (sequelize, DataTypes) => {
  class hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotel.init({
    idHotel: DataTypes.STRING,
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    starRating: DataTypes.FLOAT,
    avgRating: DataTypes.FLOAT,
    reviewCount: DataTypes.INTEGER,
    pricePerNight: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    amenities: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};