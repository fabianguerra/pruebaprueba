import { useState } from "react";

import axios from "axios";
import { ProductRequest } from "../Domain/proRequest";

const useProductos = () => {
  const [productos, setProductos] = useState<ProductRequest[]>([]);




  const getProductos = async () => {

    const respuesta = await axios.get("http://localhost:5091/tienda-ropa/obtener-todas-las-categorias");
    setProductos(respuesta.data);

  };


  return {
    productos,
    getProductos
  }

};

export default useProductos;
