import PropTypes from 'prop-types'
import  { useEffect, useState } from 'react'
import {counterContext} from './counterContext'
import { Productos } from '../componentes/dataEjemplo/producto';
import { useParams } from 'react-router-dom';

export const StateCompo = ({ children }) => {

    
    const [listaProducto, setListaProducto] = useState(Productos);
    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(0);
    const [search, setSearch] = useState("");
    const [counters, setCounters] = useState([]);
    const [loading, setLoading] = useState(true);

    


  
    const aumentarCount = (index) => {
      setCounters((prevCounters) => {
        const newCounters = [...prevCounters];
        newCounters[index] = (newCounters[index] || 0) + 1;
        return newCounters;
      });
    };
  
    const disminuirCount = (index) => {
      setCounters((prevCounters) => {
        const newCounters = [...prevCounters];
        if (newCounters[index] > 0) {
          newCounters[index] -= 1;
        }
        return newCounters;
      });
    };
 

 


    const increment = ()=>{
        setCounter((prev => prev + 1));
    };

    const decrement = ()=>{
        counter===0 ? 0 : setCounter((prev)=>prev - 1);
    };

    const reset = ()=>{
        setCounter(0);
    };


  return (
    <counterContext.Provider
        value={{
            counter ,
            increment,
            decrement,
            reset,
            setSearch,
            setCart,
            search,
            listaProducto,
            cart, 
    }}
    >
      {children}
    </counterContext.Provider>
  )
}


