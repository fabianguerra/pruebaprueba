import { FC } from "react";
import { useFormContext } from "react-hook-form";

import { RMRequest } from "../domain/RickMortyRequest";

export const RickMortyBoton: FC = () => {
  const { setValue } = useFormContext<RMRequest>();
  const prueba = () => {
    console.log("boton funciona");
    setValue("id", "5");
  };

  return (
    <>
      <div>
        <button
          type="submit"
          className="border bg-blue-600 rounded-lg m-2 p-2"
          onClick={prueba}
        >
          5
        </button>
      </div>
    </>
  );
};
