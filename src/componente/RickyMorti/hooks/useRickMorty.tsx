import {  useState } from "react";
import { RMReponse } from "../domain/RickMortyRequest";
import axios from "axios";

const useGetRickMorty = () => {
  const [rickMortyhook, setrickmorty] = useState<RMReponse>();

  const getpersonajeRM = async (idparam: string) => {
    const repuesta = await axios.get(
      "https://rickandmortyapi.com/api/character/" + idparam
    );
    const datainfo = repuesta.data;
    const { id, name, gender, image } = datainfo;
    setrickmorty({ id, name, gender, image });
  };

  return {
    rickMortyhook,
    getpersonajeRM,
  };
};
export default useGetRickMorty;
