import { Routes, Route } from "react-router";
import Inicio from "./componente/Inicio";
import "./App.css";


import ProducPage from "./componente/Producto/producPage";

import UserPage from "./componente/Usuarios";
import Productos from "./componente/Producto";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}>

        <Route path="/UserFormularioR" element={<UserPage/>} />
        <Route path="/ProducFroms" element={<Productos/>} />
      </Route>
    </Routes>
  );
}
