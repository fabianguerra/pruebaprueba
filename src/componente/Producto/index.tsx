import { FormProvider, useForm } from "react-hook-form";
import { ProductRequest } from "./Domain/proRequest";
import { ProductosProvider } from "./ProductoProvider";
import ProducPage from "./producPage";

function Productos() {
  const initialStateForm: ProductRequest = {
    idCategoria: 0,
    nombreCategoria: "",
    descripcion: "",
  };

  const methods = useForm<ProductRequest>({
    defaultValues: initialStateForm,
  });
  return (
    <>
      <FormProvider {...methods}>
        <ProductosProvider>
          <ProducPage />
        </ProductosProvider>
      </FormProvider>
    </>
  );
}

export default Productos;
