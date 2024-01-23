
import PropTypes from 'prop-types'
export const Carrucel = ({photos}) => {
 

  return (
    <>
      <div>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            {photos.photo.map((photo, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {photos.photo.map((photo, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img  width="250px" src={photo.src} alt={photo.src} />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <img src='../src/img/chevron-back-outline.svg'></img>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <img src='../src/img/chevron-forward-outline.svg'></img>

            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

 



Carrucel.propTypes = {
  photos: PropTypes.object.isRequired
}


