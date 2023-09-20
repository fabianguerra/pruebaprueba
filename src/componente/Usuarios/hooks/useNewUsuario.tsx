import { useState } from "react";
import { UserRequest } from "../Domain/UserRequest";
import axios from "axios";

const useNewUsuarios = () => {
  const [usuarios, setUsuarios] = useState<UserRequest[]>([]);
  //const [pokenon, setPokemon] = useState<PokemonResponse>();


  const getUsuarios = async () => {
    const respuesta = await axios.get("http://localhost:3000/usuarios");
    setUsuarios(respuesta.data);
  }

  const deleteUsuarios = async (id: string) => {
    const response = await axios.delete("http://localhost:3000/usuarios/" + id);
    console.log("Response" + response);
  };
  return {
    usuarios,
    getUsuarios,
    deleteUsuarios
  }

};

export default useNewUsuarios;
