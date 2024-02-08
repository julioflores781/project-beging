
import PropTypes from 'prop-types'
import { Carrucel } from "../carrucel/Carrucel";
import { useContext, useState } from 'react';
import { counterContext } from '../../context/counterContext';

export const ProductoCart = ({ id, photos, name, description, price, stock }) => {

    const { counters, aumentarCount, disminuirCount, totalCart, setTotalCart } = useContext(counterContext);

    const [isChecked, setIsChecked] = useState(false);
    

    // Función para manejar cambios en el estado del checkbox
    const handleCheckboxChange = () => {
        
        setIsChecked(!isChecked);
        !isChecked 
        ? setTotalCart(totalCart+(price * counters[id])) 
        : setTotalCart(totalCart-(price * counters[id]));
    };

    return (
        <>
            <div className="card mb-3" key={id} >
                <div className="row g-0">
                    <div className="col-md-3 text-center">
                        <Carrucel photos={photos} id={id} />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">Precio: {price}</p>
                            <p className="card-text">Total: {parseFloat((counters[id]) ? price * counters[id] : 0).toFixed(2)}</p>
                            <div className=" position-absolute bottom-0 ">
                                <p className="card-text text-success ">{counters[id] === stock ? <small >Max stock</small> : <small >In stock</small>}</p>
                                <div className="btn-group  gap-1   col-12  ">
                                    <a className="btn col-4 btn-outline-primary" onClick={() => disminuirCount(id)}>-</a>
                                    <input className="form-control  " placeholder="0" readOnly value={counters[id]} />
                                    <a className="btn col-4 btn-outline-primary" onClick={() => aumentarCount(id, stock)} >+</a>
                                </div>
                                <div><h1></h1></div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <input
                                    className="form-check-input me-1"
                                    type="checkbox"
                                    value=""
                                    id={`checkbox-${id}`}
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





ProductoCart.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
}


