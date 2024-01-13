
import PropTypes from 'prop-types'

export const TarjetaPokemon = ({id,img,nombre}) => {
  return (
    <>
    <h1 className="text-black">Pokemon</h1>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="contenedor">
        <div className="card " >
          <img  width="100%" height="100%" src={img} /> 
          <div className="card-body prueba">
            <h1 >{nombre}</h1>
            <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              </div>
              <small className="text-muted">{id}</small>
              <a className="btn btn-sm btn-outline-secondary ">  View More  </a>
    
            </div>
          </div>
        </div>
        

      <div className="card ">
        <img  width="100%" height="100%" src={img} className="object-fit-cover border border-primary" alt={img}/>
        <div className="card-body bg-secondary text-white">
          <h1 className="card-title">{nombre}</h1>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </>
  )
}

TarjetaPokemon.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired

}

