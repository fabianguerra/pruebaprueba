import { UsuariosProvider } from "./UsuariosProvider";
import { Usuarios } from "./Usuarios";

function UserPage() {

  return (
    <>
      <UsuariosProvider>
        <h2>Usuario</h2>
        <Usuarios />
      </UsuariosProvider>
    </>
  );
}

export default UserPage;
