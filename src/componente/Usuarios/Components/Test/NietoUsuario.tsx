import { FC, useContext } from "react";
import UsuariosContext, { IUsuariosContext } from "../../UsuariosProvider";

export const NietoUsuario: FC = () => {
  const { setIsLoading } = useContext(UsuariosContext) as IUsuariosContext;

  const cambiarEstado = () => {
    console.log("Cambiando estado");
    setIsLoading((anteriorValor) => (anteriorValor == false ? true : false));
  };

  return (
    <>
      <h2>Soy el nieto</h2>
      <button onClick={cambiarEstado}>Cambiar estado</button>
    </>
  );
};
