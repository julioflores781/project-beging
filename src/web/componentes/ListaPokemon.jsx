
import PropTypes from 'prop-types'

export function ListaPokemon({ url, nombre , descripcion ,puntoPoder,imagen}) {
  return (
    <>
      <div >
        <div className="card fondo-de-pantalla text-white" >
          
          <img loading='lazy' width="100%" height="100%" src={imagen} />
        
          <div className="card-body pie-de-tarjeta">
            <h1 >{nombre}</h1>
            <p >{descripcion}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <a href= {url}  className="btn btn-sm btn-outline-secondary">Ver</a>
                <a href= {url}  className="btn btn-sm btn-outline-secondary">Editar</a>
              </div>
              <small >{puntoPoder}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




ListaPokemon.propTypes = {
  url: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  puntoPoder: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,

}


