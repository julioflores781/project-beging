import { useEffect, useRef, useState } from "react";
import { consultarApi, modoTitulo } from "../ConsultaApi";
import { ListaPokemon } from "../ListaPokemon";


export const Carrucel = () => {

    const cargaInicialRealizadaRef = useRef(false);
  const [itemsInicial, setItemsInicial] = useState(0);
  const [count] = useState(4);
  const [listaPokemon, setListaPokemon] = useState([]);
  
//   const match = results.url.match(/\/(\d+)\/$/);
//   const numeroEncontrado = match ? match[1] : null;
  
  const fetchData = async (desde, cantidad) => {
    try {
      console.log(desde, cantidad);
      const results = await consultarApi(desde, cantidad);
      setItemsInicial(itemsInicial + results.length)
    //   const lista = listaPokemon;
      
    //   results.forEach( (entry) => {
    //         lista.push(entry);
    //     }, this);
      setListaPokemon(results);
    } catch (error) {
      console.error("Error: " + error);
    }
  };
    
    useEffect(() => {
      const cargarDatosIniciales = async () => {
        if (!cargaInicialRealizadaRef.current) {
           fetchData(itemsInicial, count);
          cargaInicialRealizadaRef.current = true;
        }
      };
      cargarDatosIniciales();
    }, [itemsInicial, count]);
    
    const handleNextPage = () => {
        fetchData(itemsInicial,count);
      };

    return (
        <>
            <div >
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item ">
                            {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" className="d-block w-100" alt="..."/> */}
                            <div className="row row-cols-lg-auto g-4" id="contenedor">
                            {listaPokemon.map((pokemon, index) => (
                                <ListaPokemon
                                
                                    key={index}
                                    url={pokemon.url}
                                    nombre={modoTitulo(pokemon.name)}
                                    descripcion={  pokemon.url}
                                    puntoPoder={index + 1 }
                                    imagen={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1 }.png`}
                            />
                            ))}
                        </div>
                        </div>
                        <div className="carousel-item active">
                        <div className="row row-cols-lg-auto g-4" id="contenedor">
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
                            {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" className="d-block w-100" alt="..."/> */}
                        </div>
                        <div className="carousel-item">
                            {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg" className="d-block w-100" alt="..."/>
                        </div> */}
                        <div className="row row-cols-lg-auto g-4" id="contenedor">
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
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" onClick={handleNextPage} data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"  >Next</span>
                    </button>
            </div>
        </div>
        </>
    );
}

 
