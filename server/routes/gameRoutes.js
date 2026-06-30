const express = require("express");
const router = express.Router();

router.use(express.json());

router.post("/:roomCode/start", (req, res) => {
    res.send(`Halaman start game di room ${req.params.roomCode}`);
});

router.post("/:roomCode/guess", (req, res) => {
    res.send(`Halaman submit tebakan di room ${req.params.roomCode}`);
});

router.get("/:roomCode/status", (req, res) => {
    res.send(`Halaman status game di room ${req.params.roomCode}`);
});

router.get("/:roomCode/round/:round", (req, res) => {
    res.send(`Halaman detail round ${req.params.round} di room ${req.params.roomCode}`);
});

router.get("/:roomCode/results", (req, res) => {
    res.send(`Halaman hasil akhir game di room ${req.params.roomCode}`);
});

module.exports = router;