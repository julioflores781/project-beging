import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { counterContext } from './counterContext'
import { Productos } from '../componentes/dataEjemplo/Producto'
import Swal from 'sweetalert2'

const init = JSON.parse(localStorage.getItem('cart')) || [];

export const StateCompo = ({ children }) => {


  const [lista, setLista] = useState(Productos);
  const [listaProducto, setListaProducto] = useState([]);
  const [cart, setCart] = useState(init);
  const [search, setSearch] = useState("");
  const [counters, setCounters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);


  const aumentarCount = (index, stock) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      if ((newCounters[index] ? newCounters[index] : 0) < stock) {
        newCounters[index] = (newCounters[index] ? newCounters[index] : 0) + 1;
      }
      return newCounters;
    });
  };

  const disminuirCount = (index) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      if (newCounters[index] > 0) {
        newCounters[index] -= 1;
      }
      if (newCounters[index] === 0) {
        rmCart(index);
      }
      return newCounters;
    });
  };

  const addCart = (id) => {
    const newCart = [...cart];
    const productoExist = newCart.find((producto) => producto.id === id);
    console.log(counters[id]);
    if (counters[id] != 0 && counters[id] != undefined) {
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
    } else {
      console.log('cantidad 0, agregure cantidad');
    }
    setCart(newCart);
  };

  const rmCart = (id) => {
    const newCart = [...cart];
    const productoExist = newCart.find((producto) => producto.id === id);
    if (productoExist) {
      newCart.splice(newCart.indexOf(productoExist), 1);
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
        totalCart,
        setTotalCart,
      }}
    >
      {children}
    </counterContext.Provider>
  )
}


StateCompo.propTypes = {
  children: PropTypes.object
}