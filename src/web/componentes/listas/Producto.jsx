import PropTypes from 'prop-types'


export const Producto = ({id,name,descripcion,fecha_alta,photo_id,price,category_id,stock}) => {
    return (
        <>
            <div className="row row-cols-8 ">
                <div className="col border">{id}</div>
                <div className="col border">{name}</div>
                <div className="col border">{descripcion}</div>
                <div className="col border">{fecha_alta}</div>
                <div className="col border">{photo_id}</div>
                <div className="col border">{price}</div>
                <div className="col border">{category_id}</div>
                <div className="col border">{stock}</div>
            </div>
        </>
    );
}




Producto.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    fecha_alta: PropTypes.string.isRequired,
    photo_id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    category_id: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
}


