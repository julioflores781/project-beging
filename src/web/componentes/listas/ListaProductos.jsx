
import { useContext, useEffect, useState } from 'react';
import { Spinner } from '../../loader/Spinner';
import { counterContext } from '../../context/counterContext';
import { CiShoppingCart } from 'react-icons/ci';
import { Carrucel } from '../carrucel/Carrucel';
import { useParams } from 'react-router-dom';

function ListaProductos() {
  const { search, listaProducto, addCart, aumentarCount, disminuirCount, counters, rmCart,lista,setListaProducto } = useContext(counterContext);
  const [loading,] = useState(false);
  const { categoryId } = useParams()

  useEffect(() => {
    const filtrar = () => {
      !categoryId
        ? setListaProducto(lista)
        : setListaProducto(lista.filter(prod => prod.category === categoryId));
    };
    filtrar()
  }, [categoryId, lista,setListaProducto]);

  return (
    <>
      {!loading ? (
        <div className="p-4 ">
          <div className="row row-cols-1 row-cols-lg-5 g-2 g-lg-3 ">
            {listaProducto.filter((producto) => {
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
                  <p className="card-text text-center"> Total: {(counters[producto.id]) ? producto.price * counters[producto.id] : 0}</p>
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
