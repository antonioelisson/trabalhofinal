const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "163.176.187.138",
  user: "remoto2",
  password: "12345senha",
  database: "atividadefinal",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
