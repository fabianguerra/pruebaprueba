import { useState } from "react";
import { UserRequest } from "../Domain/UserRequest";
import axios from "axios";

const useNewUsuarios = () => {
  const [usuarios, setUsuarios] = useState<UserRequest[]>([]);

  const getUsuarios = async () => {
    const respuesta = await axios.get("http://localhost:3000/usuarios");
    setUsuarios(respuesta.data);
  }

  return {
    usuarios,
    getUsuarios
  }

};

export default useNewUsuarios;
