const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
    res.send("Halaman daftar semua room");
});

router.post("/create", (req, res) => {
    res.send("Halaman create room");
});


router.post("/join", (req, res) => {
    res.send("Halaman join room");
});

router.get("/:roomCode", (req, res) => {
    res.send(`Halaman detail room ${req.params.roomCode}`);
});

router.get("/:roomCode/players", (req, res) => {
    res.send(`Halaman daftar pemain di room ${req.params.roomCode}`);
});

router.delete("/:roomCode/players/:playerId", (req, res) => {
    res.send(`Halaman kick player ${req.params.playerId} dari room ${req.params.roomCode}`);
});

router.delete("/:roomCode", (req, res) => {
    res.send(`Halaman hapus room ${req.params.roomCode}`);
});

module.exports = router;