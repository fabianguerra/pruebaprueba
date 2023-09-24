import { FormProvider, useForm } from "react-hook-form";

import { ProductForm } from "./Componentes/ProductForm";
import { ProductList } from "./Componentes/productList";
import { ProductRequest } from "./Domain/proRequest";

function ProducPage() {
  const initialStateForm: ProductRequest = {
    idCategoria:0,
    nombreCategoria: "",
    descripcion: ""
  };

  const methods = useForm<ProductRequest>({
    defaultValues: initialStateForm,
    
  });

  return (
    <>
      <FormProvider {...methods}>
        <div className="border text-center p-2 gap-2 justify-start bg-white">
          <ProductForm />
          <ProductList />
        </div>
      </FormProvider>
    </>
  );
}

export default ProducPage;
