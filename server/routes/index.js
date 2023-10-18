const barangRoute = require("express").Router();
const BarangController = require("../controller/BarangContorller.js");

barangRoute.get("/", (req, res) => {
  res.send("Hallo");
});
barangRoute.get("/show", BarangController.getBarang);
barangRoute.post("/create", BarangController.createBarang);
barangRoute.put("/update/:id", BarangController.updateBarang);
barangRoute.delete("/delete/:id", BarangController.deleteBarang);

module.exports = barangRoute;
