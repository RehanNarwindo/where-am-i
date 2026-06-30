const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/location", (req, res) => {
    res.send("Halaman ambil lokasi random dari Mapillary");
});

router.get("/image/:imageId", (req, res) => {
    res.send(`Halaman detail gambar ${req.params.imageId} dari Mapillary`);
});

router.get("/search", (req, res) => {
    res.send("Halaman search gambar di Mapillary");
});

module.exports = router;