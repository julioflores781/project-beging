// import  express  from 'express';
// const express = require('express');
// const db = require('./dbConfig');

// const app = express();
// const PORT = 3000;

// app.get('/producto/:id', async (req, res) => {
//   const productId = req.params.id;

//   try {
//     const [rows, fields] = await db.execute('SELECT * FROM productos WHERE id = ?', [productId]);

//     if (rows.length > 0) {
//       res.json(rows[0]);
//     } else {
//       res.status(404).json({ message: 'Producto no encontrado' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error en el servidor' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });