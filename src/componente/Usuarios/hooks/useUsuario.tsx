import {  useState } from "react";

import { UserRequest } from "../Domain/UserRequest";

const useUsuario = () =>{
    const [usuarios, setUsuarios] = useState<UserRequest[]>([]);

    const updateUsuarios = (newData:UserRequest[]) => {
        setUsuarios(newData);
    }

    return {
        usuarios,
        setUsuarios,
        updateUsuarios
    }
}

export default useUsuario;