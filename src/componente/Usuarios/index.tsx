import { FormProvider, useForm } from "react-hook-form";
import { UserForm } from "./Components/UserForm";
import { UserRequest } from "./Domain/UserRequest";

function UserPage() {

  const initialStateForm: UserRequest = {
    Id: 0,
    User: "",
    Username: "",
    Email: "",
  };

  const methods = useForm<UserRequest>({
    defaultValues: initialStateForm,
  });

  return (
    <>
      <FormProvider {...methods}>
        <div className="border text-center p-2 gap-2 justify-start bg-white">
          Formulario
          <UserForm />
        </div>
      </FormProvider>
    </>
  );
}

export default UserPage;
