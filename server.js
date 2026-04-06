const express = require("express");
const app = express();
const port = 3000;
const musicasRoutes = require("./src/routes/musicasRoute.js");

app.use(express.json());
app.use("/musicas", musicasRoutes);

app.get("/", (req, res) => {
  res.send(
    `<h1>Trabalho Final de Cloud Computing - API de Músicas</h1>
    <p>Use o endpoint /musicas para acessar as funcionalidades da API.</p>`,
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
