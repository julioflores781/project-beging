import PropTypes from 'prop-types'
export const Carrucel = ({ photos, id }) => {


  return (
    <>
        <div   id={`carouselExampleIndicators-${id}`} className="carousel slide">
          <div className="carousel-indicators ">
            {photos.map((photo, index) => (
              <button
                key={index}
                type="button"
                data-bs-target={`#carouselExampleIndicators-${id}`}
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {photos.map((photo, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img  style={{ width: '350px', height: '350px', padding: '10px' }} src={photo.src} alt={photo.src} />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#carouselExampleIndicators-${id}`}
            data-bs-slide="prev"
          >
            <img src='../src/web/img/chevron-back-outline.svg'></img>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#carouselExampleIndicators-${id}`}
            data-bs-slide="next"
          >
            <img src='../src/web/img/chevron-forward-outline.svg'></img>

            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </>
  );
}

Carrucel.propTypes = {
  photos: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired
}


