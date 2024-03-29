
import NavBar from './componentes/barras_nav/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CounterApp } from './componentes/CounterApp';
import { Pokemon } from './componentes/Pokemon';
import ListaProductos from './componentes/listas/ListaProductos';
import { CartScreen } from './componentes/cart/CartScreen';
import { CheckOut } from './componentes/checkOut/CheckOut';
import { StateCompo } from './context/StateCompo';
import { ListGroup } from './componentes/listas/listGroup';
import AppDVE from './devextreme/App.jsx';
import 'devextreme/dist/css/dx.light.css';
import GridProductos from './componentes/grid/GridProductos.jsx';
import { Login } from './componentes/login/Login.jsx';

export const App = () => {
  return (
    <>
      <StateCompo>
        <BrowserRouter>
            <NavBar />
            <div className='pading-top'> </div>
            <Routes>
              <Route index element={<Login/>} /> 
              <Route path='/login' element={<Login/>} />
              <Route path='/lista' element={<ListGroup/>} />
              <Route path='/app' element={<AppDVE className="dx-viewport"/>} />
              <Route path='/gridproducto' element={<GridProductos />} />
              <Route path='/carro' element={<CartScreen/>} />
              <Route path='/productos' element={<ListaProductos/>} /> 
              <Route exact path='/productos/:categoryId' element={<ListaProductos/>} />
              <Route path='/counter' element={<CounterApp/>} />
              <Route path='/pokemon' element={<Pokemon nombre='bulbasaur' cargaInicialRealizadaRef={true}/>} />
              <Route path='/check' element={<CheckOut/>} />
            </Routes>
        </BrowserRouter>   
      </StateCompo>
    </>
  );
};
