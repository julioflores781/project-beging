import { useEffect, useRef, useState } from "react"
import { getPokemonByNombre, modoTitulo } from "./ConsultaApi"
import { Modal } from "./modal/Modal";


export const Pokemon =  ({ nombre}) => {
  const cargaInicialRealizadaRef = useRef(false);
  const [pokemon, setPokemon] = useState(null)
  const [mostrar, setMostrar] = useState(true)
  const [id, setId] = useState(1)
  const [busqueda, setBusqueda] = useState('')
  
  const fetchPokemon = async ()=>{
    try {
      const pokemonJson = await getPokemonByNombre(nombre);
      setPokemon(pokemonJson)
      console.log(pokemonJson);
      console.log(pokemon);
    } catch (error) {
      console.error(error);
    }
  }
  

  useEffect(() => {
    console.log('pase por aqui ');
    const cargarDatosIniciales = async () => {
      if (!cargaInicialRealizadaRef.current) {
        fetchPokemon(nombre);
        cargaInicialRealizadaRef.current = true;
      }
    };
    cargarDatosIniciales();
  }, [1]);
  
  // fetchPokemon(nombre);
  

  return (
      <>
            {/* <a className="btn btn-sm btn-outline-secondary " onClick={<Modal/>}>  Aceptar  </a>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="contenedor">
      
      <div className="card " >
        
        <img  width="100%" height="100%" src={pokemon.img} />
      
        <div className="card-body prueba">
          <h1 >{modoTitulo(pokemon.nombre)}</h1>
          <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
            </div>
            <small className="text-muted">{pokemon.id}</small>
            <a className="btn btn-sm btn-outline-secondary ">  View More  </a>
  
          </div>
        </div>
      </div>
      

    <div className="card ">
      <img  width="100%" height="100%" src={pokemon.img} className="object-fit-cover border border-primary" alt={pokemon.img}/>
      <div className="card-body bg-secondary text-white">
        <h1 className="card-title">{modoTitulo(pokemon.nombre)}</h1>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div> */}

        

      </>
    )
  }