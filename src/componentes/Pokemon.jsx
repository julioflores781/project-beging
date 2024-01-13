import {   useEffect, useRef, useState } from "react"
import { getPokemonByNombre } from "./ConsultaApi";
import PropTypes from 'prop-types'
import { TarjetaPokemon } from "./TarjetaPokemon";


export const Pokemon =  ({ nombre}) => {
  const [bodyPokemon, setBodyPokemon] = useState()
  const cargaInicialRealizadaRef = useRef(false);
  
  const fetchPokemon = async (nombre)=>{
    try {
      const respuesta = await getPokemonByNombre(nombre);
      if (respuesta!=null) {
          setBodyPokemon(<TarjetaPokemon
              id={respuesta.id}
              nombre={respuesta.nombre}
              img={respuesta.img}
            />
          )
      }else{
        throw  Error('No retorno dator getPokemonByNombre');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  
  useEffect(() => {
    const cargarDatosIniciales = async () => {
      try {
        
        if (!cargaInicialRealizadaRef.current) {
          fetchPokemon('bulbasaur');
        }else{
          setBodyPokemon(  (<h1> Prueba</h1> ))
        }
        cargaInicialRealizadaRef.current = true;
      } catch (error) {
        console.error("Error: " + error);
      }
      }
      cargarDatosIniciales();
  }, [nombre]);

  
  
  
  return (
    <>
    <div>
    {( 
          bodyPokemon
        )}
    </div>
    </>
    )
  }





  

  
  
  

  

  
  Pokemon.propTypes = {
  nombre: PropTypes.string.isRequired
  }
  
  
  