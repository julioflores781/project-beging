import app from "./app.js";
import { PORT } from "./config.js";

    app.listen(PORT)
    console.log('se inicio el server en http://localhost:'+PORT);


// import express   from 'express';
// import fs from 'fs'


// const urlArchivoProducto=  './web/componentes/dataEjemplo/Producto.jsx';
// const app = express();

// const readProductos = ()=>{
//     try {
//         const data = fs.readFileSync(urlArchivoProducto)
//         return  JSON.parse(data);
//     } catch (error) {
//         console.error(error);
//     }
// }
// // const whiteProductos = (data)=>{
// //     try {
// //         fs.writeFileSync(urlArchivoProducto,JSON.stringify(data));
// //     } catch (error) {
// //         console.error(error);
// //     }
// // }

// app.get("/productos",(req,res) =>{
//     const data = readProductos();
//     res.json(data.productos)
// })

// app.get('/',(req,res) =>{
//     res.send('{nombre:"Prueba"}')
// })

// app.listen(3000, ()=>{
// })