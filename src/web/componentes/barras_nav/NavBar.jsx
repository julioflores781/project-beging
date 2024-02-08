import { Link } from "react-router-dom";
import { useContext } from "react";
import { counterContext } from "../../context/counterContext";
import { CiShoppingCart } from "react-icons/ci";


const NavBar = () => {
    const { setSearch, cart  } = useContext(counterContext);

    const  handleChange = e=>{
        setSearch(e.target.value);
    }

    

    return (
        <>
          <nav className="navbar navbar-expand-lg bg-secondary  fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/productos'}>Product</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'/login'}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/counter'}>Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to={'/productos/Tecnología'}>Tecnología</Link></li>
                            <li><Link className="dropdown-item" to={'/productos/Hogar'}>Hogar</Link></li>
                            <li><Link className="dropdown-item" to={'/productos/Ropa'}>Ropa</Link></li>
                            <li><Link className="dropdown-item" to={'/gridproducto'}>Producto</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to={'/check'}>check</Link></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" onChange={handleChange} placeholder="Search" aria-label="Search"/>
                        <a className="btn btn-primary" >Search</a>
                    </form>
                        <Link to={'/carro'}><CiShoppingCart/><span>{(cart.length!=0) ? cart.length : 0}</span></Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;


