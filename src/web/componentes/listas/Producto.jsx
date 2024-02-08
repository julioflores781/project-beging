import PropTypes from 'prop-types'
import { useContext } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { counterContext } from '../../context/counterContext';
import { Carrucel } from '../carrucel/Carrucel';


export const Producto = ({ id, name, photos, price, category, stock }) => {
    const { addCart, aumentarCount, disminuirCount, counters, rmCart } = useContext(counterContext);
    return (
        <>
            <div className="card " key={id}>
                <div className=" text-center " >
                    <Carrucel photos={photos} id={id} />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {name}
                    </h5>
                    <p className="card-text text-center">{category}</p>
                    <p className="card-text text-center" readOnly>  Pecio: {price} Stock: {stock}</p>
                    <p className="card-text text-center"> Total: {parseFloat((counters[id]) ? price * counters[id] : 0).toFixed(2)}</p>
                    <div className="btn-group  gap-1   col-12  ">
                        <a onClick={() => disminuirCount(id)} className="btn col-4 btn-outline-primary">
                            -
                        </a>
                        <a className="btn col-4 btn-outline-primary " onClick={() => { rmCart(id) }}><CiShoppingCart /></a>
                        <input className="form-control" placeholder="0" readOnly value={counters[id]} />
                        <a className="btn col-4 btn-outline-primary " onClick={() => { addCart(id) }}><CiShoppingCart /></a>
                        <a onClick={() => aumentarCount(id, stock)} className="btn col-4 btn-outline-primary">
                            +
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}




Producto.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired
}


