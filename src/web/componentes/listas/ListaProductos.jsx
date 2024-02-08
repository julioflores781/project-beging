
import { useContext, useEffect, useState } from 'react';
import { Spinner } from '../../loader/Spinner';
import { counterContext } from '../../context/counterContext';
import { useParams } from 'react-router-dom';
import { Producto } from './Producto';

function ListaProductos() {
  const { search, listaProducto, lista, setListaProducto } = useContext(counterContext);
  const [loading,] = useState(false);
  const { categoryId } = useParams()

  useEffect(() => {
    const filtrar = () => {
      !categoryId
        ? setListaProducto(lista)
        : setListaProducto(lista.filter(prod => prod.category === categoryId));
    };
    filtrar()
  }, [categoryId, lista, setListaProducto]);

  return (
    <>
      {!loading ? (
        <div className="p-4 ">
          <div className="row row-cols-1 row-cols-lg-5 g-2 g-lg-2 ">
            {listaProducto.filter((producto) => {
              return search.toLowerCase() == ''
                ? producto
                : producto.name.toLowerCase().includes(search);
            }).map((producto) => (
              <div key={producto.id}>
                <Producto
                  id={producto.id}
                  name={producto.name}
                  photos={producto.photos}
                  price={producto.price}
                  category={producto.category}
                  stock={producto.stock}
                />
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
