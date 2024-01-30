import {pool} from '../db.js';

export const getProductos = async ( req , res )=>{

    try {
        
        const [result] = await pool.query('SELECT id, descripcion, fecha_alta,  name, photo_id, price, category_id, stock FROM producto');
        res.json(result);
    } catch (error) {
        console.warn(error);
    }
}

export const getProductoById = async ( req , res )=>{
    try {
        const [result] = await pool.query('SELECT * FROM producto where id = ?',[req.params.id]);
    
        if(result.length>0){
            res.json(result[0]);
        }else{
            throw Error('Producto no encontrado');
        }
    } catch (error) {
        return res.status(404).json({mensaje: error.message});
        
    }
}

export const createProducto = async ( req , res )=>{
    try {        
        const fechaActual = new Date();
        const { descripcion,  name, photo_id, price, category_id, stock } = req.body;
        const [result] = await pool.query('INSERT INTO producto (descripcion, fecha_alta,  name, photo_id, price, category_id, stock) VALUES( ? , ? , ? , ? , ? , ? , ? )'
        ,[descripcion, fechaActual,  name, photo_id, price, category_id, stock]);
        const respuesta = {
            id: result.insertId,
            descripcion, 
            fechaActual,  
            name, 
            photo_id, 
            price, 
            category_id, 
            stock
        }
        res.json(respuesta);
    } catch (error) {
        console.warn(error);
        
    }
}

export const updateProductos = async ( req , res )=>{
    try {
        const [result] = await pool.query('UPDATE producto SET? WHERE id = ?',[req.body,req.params.id]);
    
        if(result.affectedRows>0){
            console.log(result);
            res.json(req.body);
        }else{
            throw Error('Producto no encontrado');
        }
    } catch (error) {
        return res.status(404).json({mensaje: error.message});
        
    }
}

export const deleteProductos = async ( req , res )=>{
    try {
        const [result] = await pool.query('DELETE FROM producto where id = ?',[req.params.id]);
    
        console.log(result);
        if(result.affectedRows > 0){
            return res.sendStatus(204)
        }else{
            throw Error('Producto no encontrado');
        }
    } catch (error) {
        return res.status(404).json({mensaje: error.message});
        
    }
}