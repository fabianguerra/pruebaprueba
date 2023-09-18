import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function Inicio() {
  return (
    <div className="flex  relative">
      <div className="bg-blue-700 w-auto grid grid-cols-1 h-screen">
        <Link to="/">Inicio</Link>
        <Link to="/contador" className="mx-2">contador</Link>
        <Link to="/pagina2" className="mx-2">PAGINA2</Link>
        
        <Link to="/UserFormularioR" className="mx-2">USUARIOS</Link>
        <Link to="/ProducFroms" className="mx-2">PRODUCTO</Link>
      </div>

      <div className="flex flex-col h-screen flex-1 overflow-auto duration-200 transition-colors relative ">
        <header className="h-16 bg-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 my-4 mx-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
        </header>
        <main className="h-screen overflow-y-auto bg-[#E4E9F7]   dark:bg-gray-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Inicio;
