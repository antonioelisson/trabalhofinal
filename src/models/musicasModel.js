const pool = require("../config/db.js");

module.exports = class musicas {
  static async getAllMusicas() {
    const [rows] = await pool.query("SELECT * FROM musica");
    return rows;
  }
};
