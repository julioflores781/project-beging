
import PropTypes from 'prop-types'
import { Carrucel } from "../carrucel/Carrucel";

export const  ProductoCart = ({id,photos,name, description,price,total}) => {
    

  return (
    <>
        <div  className="card mb-3" key={id} >
            <div className="row g-0">
                <div  className="col-md-3 text-center">
                <Carrucel  photos={photos} id={id} />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">Precio: {price}</p>
                        <p className="card-text">Total: {total}</p>
                        <div className=" position-absolute bottom-0 ">
                            <p className="card-text text-success "><small >In stock</small></p>
                            <div className="btn-group  gap-1   col-12  ">
                                <a  className="btn col-4 btn-outline-primary   ">-</a>
                                <input className="form-control  " placeholder="0" readOnly value='0' />
                                <a  className="btn col-4 btn-outline-primary">+</a>
                            </div>
                                <div><h1></h1></div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
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
    photos: PropTypes.array .isRequired,
    description: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
}


