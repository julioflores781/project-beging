import {   useEffect, useRef, useState } from "react"
import { getPokemonByNombre, modoTitulo } from "./ConsultaApi";
import PropTypes from 'prop-types'
import { TarjetaPokemon } from "./TarjetaPokemon";
import { Spinner } from "../loader/Spinner";


export const Pokemon =  ({ nombre}) => {
  const [bodyPokemon, setBodyPokemon] = useState()
  const cargaInicialRealizadaRef = useRef(false);
  
  const fetchPokemon = async (nombre)=>{
    try {
      const respuesta = await getPokemonByNombre(nombre);
      if (respuesta!=null) {
          setBodyPokemon(<TarjetaPokemon
              id={respuesta.id}
              nombre={modoTitulo( respuesta.nombre)}
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
        
        !cargaInicialRealizadaRef.current ?  fetchPokemon('bulbasaur')
        : setBodyPokemon(  (<div className="position-absolute top-50 start-50">
                                <Spinner />
                            </div> ))
        
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
  
  
  