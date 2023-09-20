import { ReactNode, createContext } from "react";
import { RMReponse } from "./domain/RickMortyRequest";
import useGetRickMorty from "./hooks/useRickMorty";

export interface IRickMortyContext {
  rickmortyProvider: RMReponse | undefined;
}
const RickandContext = createContext({});

export const RickMortyProvider = ({ children }: { children: ReactNode }) => {
  const { rickMortyhook } = useGetRickMorty();

  const storage: IRickMortyContext = {
    rickmortyProvider: rickMortyhook,
  };

  return (
    <RickandContext.Provider value={storage}>
      {children}
    </RickandContext.Provider>
  );
};
export default RickandContext;
