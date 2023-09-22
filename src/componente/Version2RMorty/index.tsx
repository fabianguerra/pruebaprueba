
import { V2RMCard } from "./componente/V2RICKMORTYCard";
import { V2RMProvider } from "./V2RMProvider";

function RickMortyV2Page() {
  return (
    <>
      <V2RMProvider>
        <V2RMCard />
      </V2RMProvider>
    </>
  );
}

export default RickMortyV2Page;
