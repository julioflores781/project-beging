
import { Link } from 'react-router-dom'
import { ProductoCart } from '../listas/ProductoCart'
import { useContext } from 'react';
import { counterContext } from '../../context/counterContext';
import { Spinner } from '../../loader/Spinner';

export const  CartScreen = ()  => {
  const {cart,totalCart}= useContext(counterContext);
  return (
    <>
      <div className='container'>
        <div className="form-group mt-3">
          {
            cart.length > 0 
            ? <>
              <Link to={'/check'} className="btn btn-success " >Fnalizar Compra:</Link>     
              {  cart.map((producto) => (
                    <ProductoCart  
                        key = {producto.id} 
                        id = {producto.id} 
                        photos = {producto.photos} 
                        name = {producto.name}  
                        description = {producto.description} 
                        price = {producto.price} 
                        total = {producto.total} 
                        stock = {producto.stock}
                  />))
              }
              <p className="card-text text-center"> Total del  carro: { parseFloat(totalCart).toFixed(2)}</p>
              </>
            : <div className='position-absolute top-50 start-50 translate-middle text-center'> Carro vacio <h1></h1>
              <Spinner/>
            </div>
          }
        </div>
      </div>
    </>
  )
}




