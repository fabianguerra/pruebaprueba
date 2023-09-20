import { FC, useContext } from "react";
import UsuariosContext, { IUsuariosContext } from "../../UsuariosProvider";

export const HijoUsuario: FC = () => {
  const { loading } = useContext(UsuariosContext) as IUsuariosContext;
  return (
    <>
      <h2>Soy el hijo</h2>
      {loading ? "Cargando" : "No cargando"}
    </>
  );
};
