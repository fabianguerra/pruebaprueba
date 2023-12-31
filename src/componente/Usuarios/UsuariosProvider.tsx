import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { UserRequest } from "./Domain/UserRequest";
import useNewUsuarios from "./hooks/useNewUsuario";

export interface IUsuariosContext {
  loading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  usuariosList: UserRequest[];
  searchUsuarios: () => void;
}

const UsuariosContext = createContext({});

export const UsuariosProvider = ({ children }: { children: ReactNode }) => {

  const [loading, setIsLoading] = useState(true);
  const { usuarios, getUsuarios } = useNewUsuarios();

  const storage: IUsuariosContext = {
    loading: loading,
    setIsLoading,
    usuariosList: usuarios,
    searchUsuarios: getUsuarios,
  };

  return (
    <UsuariosContext.Provider value={storage}>
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosContext;
