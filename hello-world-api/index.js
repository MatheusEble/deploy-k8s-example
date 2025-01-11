const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
