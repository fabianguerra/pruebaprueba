import { Routes, Route } from "react-router";
import Inicio from "./componente/Inicio";
import "./App.css";
import Contador from "./componente/Contador";
import Datatable from "./componente/Pagina2";
import Pagina3 from "./componente/pag3";
import UserFomulario from "./componente/Usuarios";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}>
        <Route path="/contador" element={<Contador />} />
        <Route path="/pagina2" element={<Datatable />} />
        <Route path="/pagina3" element={<Pagina3 />} />
        <Route path="/UserFormularioR" element={<UserFomulario/>} />
      </Route>
    </Routes>
  );
}
