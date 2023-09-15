import { FC } from "react";
import InputText from "../../InputText/Index";

import { useFormContext } from "react-hook-form";
import { ProRequest } from "../Domain/proRequest";

export const UserFormproduc: FC = () => {
  const { getValues, reset } = useFormContext<ProRequest>();

  const handleConsultar = () => {
    const params: ProRequest = { ...getValues() };
    console.log("Datos" + JSON.stringify(params));
    alert(JSON.stringify(params));
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="border  grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center  ">
      <InputText title="Id:" name="Id" />
      <InputText title="nombre:" name="User" />
      <div className="lg:text-right md:text-center">
        <button
          title="boton"
          className="border  rounded-xl p-2 m-2 bg-blue-400"
          onClick={handleConsultar}
        >
          Agregar
        </button>
        <button
          title="boton"
          onClick={handleReset}
          className="border  rounded-xl p-2 m-2 bg-blue-400 "
        >
          Modificar
        </button>
        <button
          title="boton"
          className="border  rounded-xl p-2 m-2 bg-blue-400"
          onClick={handleConsultar}
        >
          Consultar
        </button>
        <button
          title="boton"
          onClick={handleReset}
          className="border  rounded-xl p-2 m-2 bg-blue-400 "
        >
          Limpiar
        </button>
      </div>
    </div>
  );
};
