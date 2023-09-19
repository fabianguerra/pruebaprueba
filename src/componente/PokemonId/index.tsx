import { Pokemon } from "./Pokemon";
import { PokemonProvider } from "./pokemonProvider";

function PokemonPage() {
  return (
    <>
      <PokemonProvider>
        <Pokemon />
      </PokemonProvider>
    </>
  );
}

export default PokemonPage;
