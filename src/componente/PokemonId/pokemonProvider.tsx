import { createContext, ReactNode } from "react";
import { PokemonResponse2 } from "./domain/pokemonRequest";
import useGetPokemonId from "./hooks/usePokemonId";

export interface IPokemonContext {
  pokemon: PokemonResponse2[];
}

const PokemonContext = createContext({});

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const { pokemon2 } = useGetPokemonId();
  const storage: IPokemonContext = {
    pokemon:pokemon2,
  };

  return (
    <PokemonContext.Provider value={storage}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
