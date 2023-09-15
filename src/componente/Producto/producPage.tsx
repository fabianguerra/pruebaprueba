import { FormProvider, useForm } from "react-hook-form";

import { ProRequests } from "./Domain/proRequest";
import { UserFormproduc } from "./Componentes/producForms";

function ProducPage() {
  const initialStateForm: ProRequests = {
    nombre: "",
    descripcion: ""
  };

  const methods = useForm<ProRequests>({
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
