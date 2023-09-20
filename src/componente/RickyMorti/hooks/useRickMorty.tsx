import { useEffect, useState } from "react";
import { RMReponse } from "../domain/RickMortyRequest";
import axios from "axios";

const useGetRickMorty = () => {
  const [rickMortyhook, setrickmorty] = useState<RMReponse>();

  useEffect(() => {
    getpersonajeRM();
  }, []);

  const getpersonajeRM = async () => {
    
    const repuesta = await axios.get(
      "https://rickandmortyapi.com/api/character/3"
    );
    const datainfo = repuesta.data;
    const { id, name, gender, image } = datainfo;
    setrickmorty({ id, name, gender, image });
  };

  return {
    rickMortyhook,
  };
};
export default useGetRickMorty;
