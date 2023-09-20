
import { Rickand } from "./Rickand";
import { RickMortyProvider } from "./rickMortyPovider";

function RickPage() {
  return (
    <>
      <RickMortyProvider>
       <Rickand/>
      </RickMortyProvider>
    </>
  );
}

export default RickPage;
