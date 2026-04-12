const musicas = require("../models/musicasModel.js");

module.exports = class getAllMusicasController {
  static async getAllMusicas(req, res) {
    try {
      const musicasList = await musicas.getAllMusicas();
      res.json(musicasList);
    } catch (err) {
      console.error("❌ Erro:", err.message);
      res.status(500).json({ error: err.message });
    }
  }
};