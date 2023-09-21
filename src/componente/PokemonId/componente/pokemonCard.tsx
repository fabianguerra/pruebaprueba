import { FC, useContext } from "react";
import PokemonContext, { IPokemonContext } from "../pokemonProvider";
import { PokemonResponse2 } from "../domain/pokemonRequest";

export const PokemonCard: FC = () => {
  const { pokemon } = useContext(PokemonContext) as IPokemonContext;
  
//<img className="m-auto" src={pokemon?.sprites} /* QUEMADA */ alt="" />
  return (
    <>
    {pokemon!.length > 0 ? (pokemon?.map((e:PokemonResponse2, key: number  ) =>(
      <div className="mt-5 " key={key}>
        <div className=" text-center rounded-lg ml-8 cente bg-black border-4 border-red-600 w-52 py-16 ">
          
          <p className="text-white"> Nombre: {e!.name} </p>
          
        </div>
      </div>
      ))) : ( <tr>
        <td colSpan={3}>No hay POKEMON disponibles.</td>
      </tr>)}
      
    </>
  );
};
