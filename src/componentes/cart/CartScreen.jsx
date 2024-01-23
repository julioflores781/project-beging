
import { Link } from 'react-router-dom'
import { ProductoCart } from '../listas/ProductoCart'
import { useContext } from 'react';
import { counterContext } from '../../context/counterContext';
import { Spinner } from '../../loader/Spinner';

export const  CartScreen = ()  => {
  const {cart}= useContext(counterContext);
  return (
    <>
          
          {cart.length > 0 
          ? cart.map((producto) => (
            <>
              <div className='container'>
                <div className="form-group mt-3">
                  <Link to={'/check'} className="btn btn-success " >Fnalizar Compra:</Link>     
                </div>
                  <ProductoCart  id={producto.id} photos={producto.photos} name={producto.name}  description={producto.description} price={producto.price} total={producto.total} key={producto.id} />
                
              </div>
           </>
          ))
          : <div className='position-absolute top-50 start-50 translate-middle text-center'> Carro vacio <h1></h1><Spinner/></div>

          }
    </>
  )
}




