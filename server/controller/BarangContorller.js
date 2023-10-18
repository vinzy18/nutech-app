const { barang } = require("../models");

class BarangController {
  static async getBarang(req, res) {
    try {
      let barangs = await barang.findAll({
        order: [["nama_barang", "ASC"]],
      });
      res.status(200).json(barangs);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  static async createBarang(req, res) {
    try {
      const { nama_barang, foto_barang, harga_jual, harga_beli, stok } =
        req.body;
      let resultBarang = await barang.create({
        nama_barang,
        foto_barang,
        harga_jual,
        harga_beli,
        stok,
      });
      console.log(`${nama_barang} berhasil ditambahkan`);
      res.status(200).json(resultBarang);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  static async updateBarang(req, res) {
    try {
      const id = +req.params.id;
      const { nama_barang, foto_barang, harga_jual, harga_beli, stok } =
        req.body;
      let resultBarang = await barang.update(
        {
          nama_barang,
          foto_barang,
          harga_jual,
          harga_beli,
          stok,
        },
        {
          where: { id },
        }
      );
      resultBarang[0] === 1
        ? res.status(200).json({
            message: `${nama_barang} berhasil diperbaharui`,
          })
        : res.status(404).json({
            message: `${nama_barang} gagal diperbaharui`,
          });
    } catch (err) {
      res.status(400).json(err);
    }
  }
  static async deleteBarang(req, res) {
    const id = +req.params.id;
    let deleteBarang = await barang.destroy({
      where: { id },
    });
    deleteBarang === 1
      ? res.status(200).json({
          message: `Barang berhasil dihapus`,
        })
      : res.status(400).json({
          message: `Barang gagal dihapus`,
        });
  }
  cacth(err) {
    res.status(400).json(err);
  }
}

module.exports = BarangController;
