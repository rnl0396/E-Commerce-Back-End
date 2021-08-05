const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init({
    id: {
      // define columns
      type: DataTypes.INTEGER,
      allowNill: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DatataTypes.STRING,
      allowNull: False
    }
    },{
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'category',
    }

);


module.exports = Category;
