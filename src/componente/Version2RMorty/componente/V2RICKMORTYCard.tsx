import { FC, useContext } from "react";

import { v2RMResponse } from "../domain/V2RICKMORTYRequest";
import V2RMContext, { IV2RMContext } from "../V2RMProvider";

export const V2RMCard: FC = () => {
  const { V2RMPROVIDERCT } = useContext(V2RMContext) as IV2RMContext;

  //<img className="m-auto" src={pokemon?.sprites} /* QUEMADA */ alt="" />
  return (
    <>
      {/* {V2RMPROVIDERCT!.length > 0 ? (
        V2RMPROVIDERCT?.map((e: v2RMResponse, key: number) => (
          <div className="mt-5 grid grid-cols-1 bg-blue-700 w-full" key={key}>
            <div
              className=" text-center ml-8 cente  
             py-16 "
            >
              <p className="text-white"> Nombre: {e!.id} </p>
              <p className="text-white"> Nombre: {e!.name} </p>
              <p className="text-white"> Nombre: {e!.gender} </p>
              <p className="text-white"> Nombre: {e!.image} </p>
              <img src={e!.image} alt="" className="" />
            </div>
          </div>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No hay POKEMON disponibles.</td>
        </tr>
      )} */}
      <div className="grid grid-cols-4 gap-3 m-2 bg-gray-600 p-1 rounded-md">
        {V2RMPROVIDERCT!.length > 0 ? (
          V2RMPROVIDERCT?.map((e: v2RMResponse, key: number) => (
            <div key={key} className="bg-gray-800 border-4 border-red-600 p-1 rounded-md">
              <p className="text-white"> Id: {e!.id} </p>
              <p className="text-white"> Name: {e!.name} </p>
              <p className="text-white">Gender: {e?.gender === "Male" ? "Masculino" : "Femenino"}</p>
              <img src={e!.image} alt="" className="p-1" />
            </div>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No hay POKEMON disponibles.</td>
          </tr>
        )}
      </div>
    </>
  );
};
