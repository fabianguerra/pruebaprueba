import { FC, useState } from "react";
import InputText from "../../InputText/Index";

import { useFormContext } from "react-hook-form";

import ModalComponent from "../modal/modal";
import { ProductRequest } from "../Domain/proRequest";
import axios from "axios";

export const ProductForm: FC = () => {

  const { getValues, reset } = useFormContext<ProductRequest>();
  const handleConsultar = () => {};

  const handleAgregar = async () => {
    const params: ProductRequest = { ...getValues() };
    await axios.post("http://localhost:3000/productos", {...params});
  };


  const handleReset = () => {
    reset();
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border  grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center  ">
      {/* <InputText title="nombre:" name="nombre" />
      <InputText title="descripcion:" name="descripcion" /> */}
      <div className="lg:text-right flex md:text-center">
        <button onClick={toggleModal}>Agregar producto</button>

        <button
          title="boton"
          className="border  rounded-xl p-2 m-2 bg-blue-400"
          onClick={handleConsultar}
        >
          Consultar
        </button>
        <button
          title="boton"
          onClick={handleReset}
          className="border  rounded-xl p-2 m-2 bg-blue-400 "
        >
          Limpiar
        </button>
      </div>
      <ModalComponent
        isOpen={isOpen}
        onClose={toggleModal}
        title={"Modal Static"}
      >
        <div className="grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center ">
          <InputText  title="id:" name="id" />

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
      </ModalComponent>
    </div>
  );
};
