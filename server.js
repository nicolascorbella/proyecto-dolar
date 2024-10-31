const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/dolar', async (req, res) => {
  try {
    const response = await fetch('https://criptoya.com/api/dolar');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    res.status(500).json({ error: "Error al obtener la cotización del dólar" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
