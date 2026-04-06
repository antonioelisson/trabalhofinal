const musicas = require("../models/musicasModel.js");

module.exports = class getAllMusicasController {
  static async getAllMusicas(req, res) {
    const musicasList = await musicas.getAllMusicas();
    res.json(musicasList);
  }
};
