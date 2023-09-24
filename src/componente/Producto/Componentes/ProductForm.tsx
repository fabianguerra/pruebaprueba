import { FC, useContext, useEffect, useState } from "react";
import ProductosContext, { IProductosContext } from "../ProductoProvider";

import ModalComponent from "../modal/modal";
import InputText from "../../InputText/Index";


export const ProductForm: FC = () => {
  const { searchProductos,AgregarProductos } = useContext(ProductosContext) as IProductosContext;

  // const { getValues } = useFormContext<ProductRequest>();
  const handlerConsultar = () => {
    searchProductos();
  };

  const handlerAgregarr = () => {
    AgregarProductos();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // const handleAgregar = async () => {
  //   debugger;
  //   const params: ProductRequest = { ...getValues() };
  //   await axios.post("http://localhost:5091/tienda-ropa/agregar-categoria", { ...params });
  // };

  useEffect(() => {
    handlerConsultar();
  }, []);

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

        <button
          title="boton"
          className="border  rounded-xl p-2 m-2 bg-blue-400"
          onClick={toggleModal}
        >
          Agregar producto
        </button>
      </div>

      <ModalComponent
        isOpen={isOpen}
        onClose={toggleModal}
        title={"Modal Static"}
      >
        <div>
          <InputText title="Nombre Categoria" name="nombreCategoria" />
          <InputText title="DESCRIPCION" name="descripcion" />

          <button
          title="boton"
          className="border  rounded-xl p-2 m-2 bg-blue-400"
          onClick={handlerAgregarr}
        >
          AGREGAR
        </button>
        </div>
      </ModalComponent>
    </div>
  );
};
