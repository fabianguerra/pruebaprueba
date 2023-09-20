import { ReactNode, createContext } from "react";
import { RMReponse } from "./domain/RickMortyRequest";
import useGetRickMorty from "./hooks/useRickMorty";

export interface IRickMortyContext {
  rickmortyProvider: RMReponse | undefined;
  getIdPErsonaje:(id:string) => void;

}
const RickandContext = createContext({});

export const RickMortyProvider = ({ children }: { children: ReactNode }) => {
  const { rickMortyhook, getpersonajeRM } = useGetRickMorty();

  const storage: IRickMortyContext = {
    rickmortyProvider: rickMortyhook,
    getIdPErsonaje:getpersonajeRM,
  };

  return (
    <RickandContext.Provider value={storage}>
      {children}
    </RickandContext.Provider>
  );
};
export default RickandContext;
