import PropTypes from 'prop-types'
import  {   useState } from 'react'
import {counterContext} from './counterContext'
import {Productos} from '../componentes/dataEjemplo/Producto'
import Swal from 'sweetalert2'

export const StateCompo = ({ children }) => {

    
  const [lista, setLista] = useState(Productos);
  const [listaProducto, setListaProducto] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [counters, setCounters] = useState([]);
  const [loading, setLoading] = useState(true);


  
 const aumentarCount = (index) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] = (newCounters[index] || 0) + 1;
      return newCounters;
    });
  };
  
    const disminuirCount = (index) => {
      setCounters((prevCounters) => {
        const newCounters = [...prevCounters];
        if (newCounters[index] > 0) {
          newCounters[index] -= 1;
        }
        return newCounters;
      });
    };
 
    const addCart = (id) => {
      const newCart = [...cart];
      const productoExist = newCart.find((producto) => producto.id === id);
  
      if (productoExist) {
        productoExist.total = productoExist.price * counters[id]
        console.log("Producto ya existe");
      } else {
        const producto = listaProducto.find((producto) => producto.id === id);
  
        if (producto) {
          producto.total = producto.price * counters[id]
          newCart.push(producto);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Producto agregado al carrito');
        } else {
          console.log('Producto no encontrado en la lista');
        }
      }
      setCart(newCart);
    };
 
    const rmCart = (id) => {
      const newCart = [...cart];
      const productoExist = newCart.find((producto) => producto.id === id);
  
      if (productoExist) {
        console.log(newCart);
        newCart.splice(productoExist.id - 1, 1);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Producto eliminado del carrito",
          showConfirmButton: false,
          timer: 1500
        });
        console.log("Producto existe");
      } else {
          console.log('Producto no encontrado en la lista');
      }
      setCart(newCart);
    };



  return (
    <counterContext.Provider
        value={{
            setSearch,
            setCart,
            search,
            listaProducto,
            setListaProducto,
            cart, 
            aumentarCount,
            disminuirCount,
            counters,
            loading, 
            setLoading,
            addCart,
            setLista,
            rmCart,
            lista,
    }}
    >
      {children}
    </counterContext.Provider>
  )
}


StateCompo.propTypes = {
  children: PropTypes.object
}