import express from "express";

import routes from "./routes.js"

const app = express();

app.use(routes);

// Métodos HTTP

// GET - Buscar/Listar informações do nosso servidor
// POST - Publicar Informações
// PUT - Atualização das Informações
// PATCH - Atualização parcial da informações
// DELETE - Deleção de Informação

app.listen(3333, () => {
    console.log("🚀 Server is running on port 3333");
});    