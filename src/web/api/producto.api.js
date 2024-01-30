import axios from "axios";

export const getProductos = async ()=>{
    const producto = await axios.get('http://localhost:3000/productos');
    return producto;
}
export const createProductos = async (producto)=>{
    await axios.post('http://localhost:3000/productos',producto);
}