const express = require("express");
const router = express.Router();

const roomRoutes = require("./roomRoutes");
const gameRoutes = require("./gameRoutes");
const mapRoutes = require("./mapRoutes");

router.use("/rooms", roomRoutes);
router.use("/game", gameRoutes);
router.use("/map", mapRoutes);

router.get("/", (req, res) => {
    res.send("Halaman utama API Mapillary Quest");
});

module.exports = router;