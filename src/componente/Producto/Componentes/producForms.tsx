import { FC } from "react";
import axios from "axios";
import useProducts from "../hooks/useProduct";

export const ProductForm: FC = () => {
  const { updateProductos } = useProducts();

  const obtenerDatos = async () => {
    const respuesta = await axios.get("http://localhost:3000/productos");
    updateProductos(respuesta.data);
  };

  return (
    <div className="border  grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center  ">
      {/* <InputText title="nombre:" name="nombre" />
      <InputText title="descripcion:" name="descripcion" /> */}
      <div className="lg:text-right flex md:text-center">
        <button
          title="boton"
          className="border  rounded-xl p-2 m-2 bg-green-400"
          onClick={obtenerDatos}
        >
          Consultar
        </button>
      </div>
      {/*  <ModalComponent
        isOpen={isOpen}
        onClose={toggleModal}
        title={"Modal Static"}
      >
        <div className="grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center ">
          <InputText title="id:" name="id" />

          <InputText title="nombre:" name="nombre" />
          <InputText title="descripcion:" name="descripcion" />

          <button
            title="boton"
            className="border  rounded-xl p-2 m-2 bg-blue-400"
            onClick={handleAgregar}
          >
            Agregar
          </button>
          <button
            title="boton"
            onClick={handleReset}
            className="border  rounded-xl p-2 m-2 bg-blue-400 "
          >
            Limpiar
          </button>
        </div>
      </ModalComponent> */}
    </div>
  );
};
