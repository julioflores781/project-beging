
import PropTypes from 'prop-types'

export const TarjetaPokemon = ({img,nombre}) => {
  return (
    <>
    
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="contenedor">     
      <div className="card ">
        <img  width="100%" height="100%" src={img} className="object-fit-cover border border-primary" alt={img}/>
        <div className="card-body bg-secondary text-white">
          <h1 className="card-title">{nombre}</h1>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
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

