import { FC, useContext } from "react";
import InputText from "../../InputText/Index";

import { useFormContext } from "react-hook-form";
import { RMRequest } from "../domain/RickMortyRequest";
import RickandContext, { IRickMortyContext } from "../rickMortyPovider";

export const RickMortyForm: FC = () => {
  const { getValues } = useFormContext<RMRequest>();
const {getIdPErsonaje} = useContext (RickandContext) as IRickMortyContext;
  const handlerConsultar = () => {
    console.log("consultar");
    const parant = { ...getValues() };
    console.log(parant);
    getIdPErsonaje(parant.id);
 
  };
  return (
    <div>
      <InputText title="id" name="id" />
      <button onClick={handlerConsultar}>Consultar</button>
    </div>
  );
};