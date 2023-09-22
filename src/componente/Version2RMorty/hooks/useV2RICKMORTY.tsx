import { useEffect, useState } from "react";
import { v2RMResponse } from "../domain/V2RICKMORTYRequest";
import axios from "axios";

const useGetV2RMId = () => {
  const [V2RM, setV2RM] = useState<v2RMResponse[]>([]);
  
  useEffect(() => {
    getV2RM();
  }, []);


  const getV2RM = async () => {
    const respuesta = await axios.get("https://rickandmortyapi.com/api/character/");
    const datainfo = respuesta.data;
    setV2RM(datainfo.results);
  };

  return {
    V2RM,
  };
};

export default useGetV2RMId;
