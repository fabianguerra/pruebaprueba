import { FormProvider, useForm } from "react-hook-form";

import { ProRequest } from "./Domain/proRequest";
import { UserFormproduc } from "./Componentes/indexCompo";

function ProducPage() {
  const initialStateForm: ProRequest = {
    nombre: "",
    descripcion: "",
  };

  const methods = useForm<ProRequest>({
    defaultValues: initialStateForm,
    
  });

  return (
    <>
      <FormProvider {...methods}>
        <div className="border text-center p-2 gap-2 justify-start bg-white">
          PRODUCTO
          <UserFormproduc />
        </div>
      </FormProvider>
    </>
  );
}

export default ProducPage;
