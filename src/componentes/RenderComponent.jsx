
import PropTypes from 'prop-types'
import { useState } from 'react';
import { Login } from './Login';
import { CounterApp } from './CounterApp';

export const RenderComponent = (props) => {
    const [currentComponent, setCurrentComponent] = useState('login');

        if (currentComponent === 'login') {
        return <Login onLoginButtonClick={() => setCurrentComponent('counter')} />;
        } else if (currentComponent === 'counter') {
        return <CounterApp onLoginButtonClick={() => setCurrentComponent('login')}/>;
        }
    

  return (
    <>       
    <renderComponent/> 
    </>
  )
};

RenderComponent.propTypes = {
    props: PropTypes.string.isRequired,
}



