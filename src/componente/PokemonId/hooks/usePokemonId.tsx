import { useEffect, useState } from "react";
import { PokemonResponse, PokemonResponse2 } from "../domain/pokemonRequest";
import axios from "axios";

const useGetPokemonId = () => {
  const [pokemon2, setPokemon] = useState<PokemonResponse2[]>([]);
  
  useEffect(() => {
    getCharizard();
  }, []);

  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=5
  const getCharizard = async () => {
    const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=9");
    const datainfo = respuesta.data;
    setPokemon(datainfo.results);
  };

  return {
    pokemon2,
  };
};

export default useGetPokemonId;
