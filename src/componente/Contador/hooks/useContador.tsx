import { useState } from "react";

const useContador = () => {

    const [numeroHook, setNumeroHook] = useState(0);

    const sumarHook = () => {
        setNumeroHook((anteriorValor) => anteriorValor + 1);
    }

    const restarHook = () => {
        setNumeroHook((anteriorValor) => anteriorValor -1)
    }

    return {
        numeroHook,
        sumarHook,
        restarHook
    }
};

export default useContador;
