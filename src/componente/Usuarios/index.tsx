import { FormProvider, useForm } from "react-hook-form";
import { UserForm } from "./Components/UserForm";
import { UserRequest } from "./Domain/UserRequest";
import { UserList } from "./Components/UserList";

function UserPage() {

  const initialStateForm: UserRequest = {
    id: "",
    Nombre: "",
    Apellido: "",
    
  };

  const methods = useForm<UserRequest>({
    defaultValues: initialStateForm,
  });

  return (
    <>
      <FormProvider {...methods}>
        <div className="border text-center p-2 gap-2 justify-start bg-white">
          USUARIO
          <UserForm />
          <UserList  />
        </div>
      </FormProvider>
    </>
  );
}

export default UserPage;
