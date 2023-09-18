import { FC, useState } from "react";

import { UserRequest } from "../Domain/UserRequest";
import { useFormContext } from "react-hook-form";
import ModalComponent from "../../Producto/modal/modal";
import InputText from "../../InputText/Index";
import axios from "axios";

export const UserForm: FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const { getValues } = useFormContext<UserRequest>();

  const handleAgregar = async () => {
    const params: UserRequest = { ...getValues() };
    await axios.post("http://localhost:3000/usuarios", { ...params });
  };

  return (
    <div className="border grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center  ">
      {/* EDITAR */}
      <ModalComponent
        isOpen={isOpen}
        onClose={toggleModal}
        title={"Modal Static"}
      > 
        <div className="grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center ">
          <InputText title="Id:" name="Id" />
          <InputText title="Nombre:" name="Nombre" />
          <InputText title="Apellido:" name="Apellido" />
          <button
            title="boton"
            className="border  rounded-xl p-2 m-2 bg-blue-400"
            onClick={handleAgregar}
          >
            Agregar
          </button>
        </div>
      </ModalComponent>
      <div className="lg:text-right md:text-center">
        {/*consultar */}
        <button
          title="boton"
          className="border  rounded-xl p-2 m-2 bg-blue-400"
        >
          Consultar
        </button>
        {/*Agregar */}
        <button
          title="boton"
          onClick={toggleModal}
          className="border  rounded-xl p-2 m-2 bg-blue-400 "
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
