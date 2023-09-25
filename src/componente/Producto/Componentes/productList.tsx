import { FC, useContext, useState } from "react";

import { ProductRequest } from "../Domain/proRequest";
import ProductosContext, { IProductosContext } from "../ProductoProvider";
import ModalComponent from "../modal/modal";
import InputText from "../../InputText/Index";

export const ProductList: FC = () => {
  const { productosList, DeleteProductos, EditarProductos } = useContext(
    ProductosContext
  ) as IProductosContext;
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  s

  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Descripcion
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">
                {productosList.map((e: ProductRequest, key: number) => (
                  <tr key={key}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {e.nombreCategoria}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {e.descripcion}
                    </td>

                    <td className="flex items-center justify-center space-x-5">
                      <button onClick={() => DeleteProductos(e.idCategoria)}>
                        delete
                      </button>
                      <button onClick={toggleModal}>editar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalComponent
        isOpen={isOpen}
        onClose={toggleModal}
        title={"Modal Static"}
      >
        <div>
        <InputText title="ID" name="idCategoria" />
          <InputText title="Nombre Categoria" name="nombreCategoria" />
          <InputText title="DESCRIPCION" name="descripcion" />

          <button
            title="boton"
            className="border  rounded-xl p-2 m-2 bg-blue-400"
            onClick={EditarProductos}
          >
            EDITAR
          </button>
        </div>
      </ModalComponent>
    </div>
  );
};
