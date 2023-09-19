import { useEffect, useState } from "react";
import { PokemonResponse } from "../domain/pokemonRequest";
import axios from "axios";

const useGetPokemonId = () => {
  const [pokemon, setPokemon] = useState<PokemonResponse>();

  useEffect(() => {
    getCharizard();
  }, []);

  const getCharizard = async () => {
    const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/11");
    const datainfo = respuesta.data;
    const {id, name,sprites, weight} = datainfo;
    const imagen = sprites.front_shiny;
    setPokemon({id, name, weight,sprites:imagen});
  
  };

  return {
    pokemon,
  };
};

export default useGetPokemonId;
