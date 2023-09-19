import { createContext, ReactNode } from "react";
import { PokemonResponse } from "./domain/pokemonRequest";
import useGetPokemonId from "./hooks/usePokemonId";

export interface IPokemonContext {
  pokemon: PokemonResponse | undefined;
}

const PokemonContext = createContext({});

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const { pokemon } = useGetPokemonId();

  const storage: IPokemonContext = {
    pokemon,
  };

  return (
    <PokemonContext.Provider value={storage}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
