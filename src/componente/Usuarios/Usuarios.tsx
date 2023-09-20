//Formulario
//Lista

import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { UserForm } from "./Components/UserForm";
import { UserList } from "./Components/UserList";
import { UserRequest } from "./Domain/UserRequest";

export const Usuarios: FC = () => {

  const initialStateForm: UserRequest = {
    id: "",
    nombre: "",
    apellido: "",
  };

  const methods = useForm<UserRequest>({
    defaultValues: initialStateForm,
  });

  return (
    <FormProvider {...methods}>
      <div className="border text-center p-2 gap-2 justify-start bg-white">
        <UserForm />
        <UserList />
        {/* PokemonCard */}
      </div>
    </FormProvider>
  );
};
