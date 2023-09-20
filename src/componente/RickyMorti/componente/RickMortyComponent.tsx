import { FC, useContext } from "react";
  
import RickandContext, { IRickMortyContext } from "../rickMortyPovider";

export const RickMortyPresent: FC = () => {
    
  const {rickmortyProvider} = useContext(RickandContext) as IRickMortyContext;
 
  return (
    <>
      <div className="mt-5">
        <div className=" text-center rounded-lg ml-8 cente bg-black border-4 border-red-600 w-52 py-16 ">
          <h2 className="text-white">id: {rickmortyProvider?.id} </h2>
          <p className="text-white"> Nombre: {rickmortyProvider?.name} </p>
          <p className="text-white">Genero: {rickmortyProvider?.gender === 'Male'? "Masculino":"Femenino"} </p>
          {/*<p className="text-white">Peso: {pokemon?.sprites} </p>*/}
          
          <img className="m-auto" src={rickmortyProvider?.image} /* QUEMADA */ alt="" />
        </div>
      </div>
    </>
  );
};
