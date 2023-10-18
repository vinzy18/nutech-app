"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  barang.init(
    {
      nama_barang: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "nama_barang tidak boleh kosong",
          },
        },
      },
      foto_barang: DataTypes.STRING,
      harga_beli: DataTypes.INTEGER,
      harga_jual: DataTypes.INTEGER,
      stok: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "barang",
    }
  );
  return barang;
};
