
import NavBar from './componentes/barras_nav/NavBar';
import { Login } from './componentes/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CounterApp } from './componentes/CounterApp';
import { Carrucel } from './componentes/carrucel/Carrucel';
import { Pokemon } from './componentes/Pokemon';

export const App = () => {
  return (
    <>
      <BrowserRouter>
          
          <NavBar />
          <div className='pading-top'></div>
          <Routes>
            <Route index element={<Login/>} /> 
            <Route path='/counter' element={<CounterApp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/pokemon' element={<Pokemon nombre='bulbasaur' cargaInicialRealizadaRef={true}/>} />
            <Route path='/carrucel' element={<Carrucel/>} />
          </Routes>
      </BrowserRouter>   
    </>
  );
};
