

export const consultarApi = async (currentPage,itemsPerPage) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${currentPage}&limit=${itemsPerPage}`);
        const { results } = await respuesta.json();        
        return results;
    } catch (error) {
      console.error("Error al consultar la API:", error);
      throw error; 
    }
  };

  
  export const getPokemonByNombre = async (nombre) => {
    try {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
      const  data  = await respuesta.json();     
      const pokemonJson = {
        id: data.id,
        nombre: data.name,
        img: data.sprites.other.dream_world.front_default,
      }; 
      return pokemonJson;
    } catch (error) {
      console.error("Error al consultar la API:", error);
      throw error; 
    }
  };


  export const modoTitulo = (text) => {
      return text.replace(/\w\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      });
    }