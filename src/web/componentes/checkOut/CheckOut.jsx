import { Link } from "react-router-dom"

export const CheckOut = () =>  {
  return (
    <>
    <div className="container text-black pading-top card">
        <h3 className=" text-black">Terminar compra</h3>
        <hr/>
            <form>
                <div className="form-group mt-3">
                <label htmlFor="nombre">Nombre:</label>
                    <input
                    className="form-control"
                    type="text"
                    id="nombre"
                    name="nombre"
                    required/>
                </div>
                <div className="form-group mt-3">
                <label htmlFor="apellido">Apellido:</label>
                    <input
                    className="form-control"
                    type="text"
                    id="apellido"
                    name="apellido"
                    required/>
                </div>
                <div className="form-group mt-3 ">
                <label htmlFor="email">Email:</label>
                    <input
                    className="form-control "
                    type="email"
                    id="email"
                    required/>
                </div>
                <div className="form-group mt-3">
                <label htmlFor="telefono">Telefono:</label>
                    <input
                    className="form-control"
                    type="number"
                    id="telefono"
                    name="telefono"
                    required/>
                </div>


                <div className="form-group mt-3">
                <Link to={'/carro'} className="btn btn-success" >Fnalizar Compra:</Link>
                <Link to={'/carro'} className="btn btn-success" >Volver al Carrito:</Link>
                <div>
                    <h1></h1>
                </div>
                    
                </div>

            </form>
      
    </div>
    </>
  )
}



 
