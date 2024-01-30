import { useContext, useEffect, useRef, useState } from "react";
import {  ListaPokemon } from "./ListaPokemon";
import { consultarApi, modoTitulo } from "./ConsultaApi";
import { InfiniteScroll } from "./InfiniteScroll";
import { Spinner } from "../loader/Spinner";
import { counterContext } from "../context/counterContext";






export const CounterApp = () => {
  const {search} = useContext(counterContext);
  const cargaInicialRealizadaRef = useRef(false);
  const [itemsInicial, setItemsInicial] = useState(0);
  const [count] = useState(20);
  const [listaPokemon, setListaPokemon] = useState([]);
  const [loading, setLoading] =  useState(true);
  
  
  const fetchData = async (desde, cantidad) => {
    try {
      console.log(desde, cantidad);
      const results = await consultarApi(desde, cantidad);
      setItemsInicial(itemsInicial + results.length)
      const lista = listaPokemon;
      results.forEach( (entry) => {
          lista.push(entry);
      }, this);
      setListaPokemon(lista);
    } catch (error) {
      console.error("Error: " + error);
    }
  };
    
    useEffect(() => {
      const cargarDatosIniciales = async () => {
        try {
          
          if (!cargaInicialRealizadaRef.current) {
            fetchData(itemsInicial, count);
            cargaInicialRealizadaRef.current = true;
          }
        } catch (error) {
          console.error("Error: " + error);
        } finally {
          setLoading(false)
        }
      };
      cargarDatosIniciales();
    }, [itemsInicial, count]);
    
    const handleNextPage = () => {
        fetchData(itemsInicial,count);
      };
    
    
    return (
      <>
      {!loading ?
      <>
      <div className="row row-cols-1 row-cols-md-4 g-2" id="contenedor">
        {listaPokemon.filter((pokemon)=>{
            return search.toLowerCase() == '' 
            ? pokemon
            : pokemon.name.toLowerCase().includes(search);
            
        }).map((pokemon, index) => (
          <ListaPokemon
            key={index}
            url={pokemon.url}
            nombre={modoTitulo(pokemon.name)}
            descripcion={pokemon.url}
            puntoPoder={index + 1 }
            imagen={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1 }.png`}
          />
        ))}
      </div>
    
      <InfiniteScroll onFetchData={handleNextPage} />
      </>
      : <div className='position-absolute top-50 start-50'><Spinner/></div>
      }
    </>
  );
};




