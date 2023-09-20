import { FC, useContext } from "react";
import PokemonContext, { IPokemonContext } from "../pokemonProvider";

export const PokemonCard: FC = () => {
  const { pokemon } = useContext(PokemonContext) as IPokemonContext;
  
    return (  
    <>
      <div className="mt-5">
        <div className=" text-center rounded-lg ml-8 cente bg-black border-4 border-red-600 w-52 py-16 ">
          <h2 className="text-white"> Nombre: {pokemon?.name} </h2>
          <p className="text-white"> Id: {pokemon?.id} </p>
          <p className="text-white">Peso: {pokemon?.weight} </p>
          {/*<p className="text-white">Peso: {pokemon?.sprites} </p>*/}
          <img className="m-auto"
            src= {pokemon?.sprites} /* QUEMADA */
            alt=""
          />
        </div>
      </div>
    </>
  );
};
