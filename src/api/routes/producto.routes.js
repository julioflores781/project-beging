import { Router } from "express";
import {
    getProductos,
    getProductoById,
    createProducto,
    updateProductos,
    deleteProductos
} from '../controllers/producto.controllers.js'
const router = Router();

router.get('/productos',getProductos)

router.get('/productos/:id',getProductoById)

router.post('/productos',createProducto)

router.put('/productos/:id',updateProductos)

router.delete('/productos/:id',deleteProductos)

export default router;