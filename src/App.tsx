import { Routes, Route } from "react-router";
import Inicio from "./componente/Inicio";
import "./App.css";
import Usuarios from "./Pages/Usuarios";
import Categorias from "./Pages/Categorias";
import Productos from "./Pages/Productos";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}>
       <Route path="/usuarios" element={<Usuarios/>}/>
       <Route path="/categorias" element={<Categorias/>}/>+
       <Route path="/productos" element={<Productos/>}/>
      </Route>
    </Routes>
  );
}
