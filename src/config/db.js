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

// Testa a conexão ao iniciar
pool.getConnection()
  .then(conn => {
    console.log("✅ Conectado ao banco com sucesso!");
    conn.release();
  })
  .catch(err => {
    console.error("❌ Erro ao conectar no banco:", err.message);
    process.exit(1); // Encerra mostrando o erro
  });

module.exports = pool;