// import React  from 'react';
// import { CounterApp } from './componentes/CounterApp';
// import { Encabezado } from './componentes/Encabezado';
// import { Modal } from './componentes/modal/Modal';
// import NavBar from './componentes/barras_nav/NavBar';

// export const App = () => {
//   return (
//     <React.StrictMode>
//       <NavBar />
//       <Modal/>
//       {/* {renderComponent()} */}
//       <CounterApp/>
//     </React.StrictMode>
//   );
// };

import React, { useState } from 'react';
import { CounterApp } from './componentes/CounterApp';
// import { Encabezado } from './componentes/Encabezado';
import { Login } from './componentes/Login';
// import { Pokemon } from './componentes/Pokemon';
import NavBar from './componentes/barras_nav/NavBar';
import { Carrucel } from './componentes/carrucel/Carrucel';
import CardComponent from './componentes/eliminar';

export const App = () => {
  const [currentComponent, setCurrentComponent] = useState('counter');

  const renderComponent = () => {
    if (currentComponent === 'login') {
      return <Login onLoginButtonClick={() => setCurrentComponent('counter')} />;
    } else if (currentComponent === 'counter') {
      return <CounterApp onLoginButtonClick={() => setCurrentComponent('login')}/>;
    }
  };
  

  return (
    <React.StrictMode>
    {/* <div className="fondo-de-pantalla"> */}
      {/* <Encabezado /> */}

      
      <NavBar />
      {/* <CardComponent/> */}
      <div className='pading-top'></div>
      {/* <Carrucel/> */}
      {/* <Login/> */}
      {renderComponent()}
      {/* <CounterApp/> */}

    {/* </div> */}
    </React.StrictMode>
  );
};