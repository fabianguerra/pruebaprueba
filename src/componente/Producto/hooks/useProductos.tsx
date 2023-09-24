import { useState } from "react";

import axios from "axios";
import { ProductRequest } from "../Domain/proRequest";

const useProductos = () => {
  const [productos, setProductos] = useState<ProductRequest[]>([]);

  const getProductos = async () => {
    const respuesta = await axios.get(
      "http://localhost:5091/tienda-ropa/obtener-todas-las-categorias"
    );
    setProductos(respuesta.data);
  };

  const handlerDelete = async (idCategoria: number) => {
    debugger;
    try {
      const url = `http://localhost:5091/tienda-ropa/eliminar-categoria?idCategoria=${idCategoria}`;
      const response = await axios.delete(url);
      console.log("Response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    productos,
    getProductos,
    handlerDelete,
  };
};

export default useProductos;
