import { useState } from "react";
import useContador from "./hooks/useContador";

function Contador() {
  //obtener - modificar
  const [numero, setNumero] = useState(0);

  const { numeroHook, restarHook, sumarHook } = useContador();

  const sumar = () => {
    console.log("Sumando");
    setNumero((anteriorValor) => anteriorValor + 1);
  };

  const restar = () => {
    console.log("Restando");
    setNumero((anteriorValor) => anteriorValor - 1);
  };

  const restablecer = () => {
    console.log("restablecer");
    setNumero(() => 0);
  };

  return (
    <>
      <div className="mx-3 px-3 my-2 rounded-lg bg-white">
        Contador
        <p className="text-xl"> mi valor : {numero} </p>
        <button
          className="py-2 px-2 border bg-red-300 rounded-lg"
          onClick={sumar}
        >
          +1
        </button>
        <button
          className="py-2 px-2 border bg-red-300 rounded-lg"
          onClick={restar}
        >
          -1
        </button>
        <button
          className="py-2 px-2 border bg-red-300 rounded-lg"
          onClick={restablecer}
        >
          Restablecer
        </button>
        <br />
        <div className="my-8 ">
          <h2 className="text-xl"> Contador Hook</h2>
          <p> Numero hook {numeroHook} </p>

          <div className="flex gap-4">
            <button
              className="p-2 border bg-blue-300 rounded-lg"
              onClick={sumarHook}
            >
              Sumar hook{" "}
            </button>
            <button
              className=" border bg-blue-300 rounded-lg"
              onClick={restarHook}
            >
              Restar hook{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contador;
