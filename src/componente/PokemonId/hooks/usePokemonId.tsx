import { useEffect, useState } from "react";
import { PokemonResponse } from "../domain/pokemonRequest";
import axios from "axios";

const useGetPokemonId = () => {
  const [pokemon, setPokemon] = useState<PokemonResponse>();

  useEffect(() => {
    getCharizard();
  }, []);

  const getCharizard = async () => {
    const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/6");
    setPokemon(respuesta.data)
  };

  return {
    pokemon,
  };
};

export default useGetPokemonId;
