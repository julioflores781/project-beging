
import { useContext, useEffect, useState } from 'react';
import { Spinner } from '../../loader/Spinner';
import { counterContext } from '../../context/counterContext';
import { CiShoppingCart } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import { Carrucel } from '../carrucel/Carrucel';
import Swal from 'sweetalert2';

function ListaProductos() {
  const { search, listaProducto, cart, setCart } = useContext(counterContext);
  const [counters, setCounters] = useState([]);
  const [lista, setLista] = useState([]);
  const [loading,] = useState(false);
  const { categoryId } = useParams()


  useEffect(() => {
    const filtrar = () => {
      !categoryId
        ? setLista(listaProducto)
        : setLista(listaProducto.filter(prod => prod.category === categoryId));
    };
    filtrar()
  }, [categoryId, listaProducto]);

  const aumentarCount = (index) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] = (newCounters[index] || 0) + 1;
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
    const lista = cart;
    lista.forEach((producto) => {
      if (producto.id == id) {
        lista.splice(producto.id - 1, 1);
      }
    });
    setCart(lista);
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

  return (
    <>
      {!loading ? (
        <div className="p-4 ">
          <div className="row row-cols-1 row-cols-lg-5 g-2 g-lg-3 ">
            {lista.filter((producto) => {
              return search.toLowerCase() == ''
                ? producto
                : producto.name.toLowerCase().includes(search);
            }).map((producto) => (
              <div className="card" key={producto.id}>
                <div className=" text-center">
                  <Carrucel photos={producto.photos} id={producto.id} />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    {producto.name}
                  </h5>
                  <p className="card-text text-center">{producto.category}</p>
                  <p className="card-text text-center" readOnly>  Pecio: {producto.price} Stock: {producto.stock}</p>
                  <p className="card-text text-center"> Total: {(counters[producto.id] != 0) ?  producto.price * counters[producto.id] : 0}</p>
                  {/* <p className="card-text">{producto.description}</p> */}
                  <div className="btn-group  gap-1   col-12  ">
                    <a onClick={() => disminuirCount(producto.id)} className="btn col-4 btn-outline-primary">
                      -
                    </a>
                    <a className="btn col-4 btn-outline-primary " onClick={() => { rmCart(producto.id) }}><CiShoppingCart /></a>
                    <input className="form-control" placeholder="0" readOnly value={counters[producto.id]} />
                    <a className="btn col-4 btn-outline-primary " onClick={() => { addCart(producto.id) }}><CiShoppingCart /></a>
                    <a onClick={() => aumentarCount(producto.id)} className="btn col-4 btn-outline-primary">
                      +
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="position-absolute top-50 start-50">
          <Spinner />
        </div>
      )}
    </>
  );
}






export default ListaProductos;
