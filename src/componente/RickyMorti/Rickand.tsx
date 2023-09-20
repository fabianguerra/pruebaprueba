import { FC } from "react";
import { RickMortyPresent } from "./componente/RickMortyComponent";
import InputText from "../InputText/Index";
import { FormProvider, useForm } from "react-hook-form";

import { RMRequest } from "./domain/RickMortyRequest";

export const Rickand: FC = () => {
  const initialStateForm: RMRequest = {
    id: "",
  };
  const method = useForm<RMRequest>({
    defaultValues: initialStateForm,
  });
  return (
    <>
      <FormProvider {...method}>
        <div>
          <h2>RickMorty page</h2>
          <RickMortyPresent />
        </div>
      </FormProvider>
    </>
  );
};
