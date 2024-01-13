import { useEffect, useRef, useState } from "react";
import {  ListaPokemon } from "./ListaPokemon";
import { consultarApi, modoTitulo } from "./ConsultaApi";
import { InfiniteScroll } from "./InfiniteScroll";






export const CounterApp = () => {
  const cargaInicialRealizadaRef = useRef(false);
  const [itemsInicial, setItemsInicial] = useState(0);
  const [count] = useState(20);
  const [listaPokemon, setListaPokemon] = useState([]);
  
  
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
        }
      };
      cargarDatosIniciales();
    }, [itemsInicial, count]);
    
    const handleNextPage = () => {
        fetchData(itemsInicial,count);
      };
    
    
    return (
      <>
      <div className="row row-cols-1 row-cols-md-4 g-2" id="contenedor">
        {listaPokemon.map((pokemon, index) => (
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
    
      <a className="btn btn-sm btn-outline-secondary" onClick={handleNextPage}>  View More  </a>
      <InfiniteScroll onFetchData={handleNextPage} />
    </>
  );
};




