import { FC, useContext, useEffect, useState } from "react";

import ProductosContext, { IProductosContext } from "../ProductoProvider";

export const ProductForm: FC = () => {
  const { searchProductos } = useContext(ProductosContext) as IProductosContext;

  const handlerConsultar = () => {

    searchProductos();
  };
  return (
    <div className="border  grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center  ">
      
      <div className="lg:text-right flex md:text-center">
        <button
          title="boton"
          className="border  rounded-xl p-2 m-2 bg-blue-400"
          onClick={handlerConsultar}
        >
          Consultar
        </button>
      </div>
    </div>
  );
};
