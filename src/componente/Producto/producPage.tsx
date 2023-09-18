import { FormProvider, useForm } from "react-hook-form";

import { ProductForm } from "./Componentes/producForms";
import { ProductList } from "./Componentes/productList";
import { ProductRequest } from "./Domain/proRequest";

function ProducPage() {
  const initialStateForm: ProductRequest = {
    id:"",
    nombre: "",
    descripcion: ""
  };

  const methods = useForm<ProductRequest>({
    defaultValues: initialStateForm,
    
  });

  return (
    <>
      <FormProvider {...methods}>
        <div className="border text-center p-2 gap-2 justify-start bg-white">
          PRODUCTO
          <ProductForm />
          <ProductList />
        </div>
      </FormProvider>
    </>
  );
}

export default ProducPage;
