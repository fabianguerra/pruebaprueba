import axios from "axios";
import {  useState } from "react";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function Datatable() {

  const [users, setUsers] = useState<User[]>([]);

  const [users2, setUsers2] = useState(false);

  const obtenerDatos = async () => {
    setUsers2(true);
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsers(respuesta.data);
    setUsers2(false);
  };

  /*   useEffect(() => {
    obtenerDatos();
  }, []);
 */

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="mt-2">Lista usuarios - HTTP GET </h2>

        {!users2 ? (
          <button
            className={`border bg-blue-300 rounded-xl p-2 my-2`}
            onClick={obtenerDatos}
          >
            {" "}
            Consultar
          </button>
        ) : (
          <button
            className={`border bg-blue-300 rounded-xl p-2 my-2`}
            onClick={obtenerDatos}
          >
            {" "}
            CARGANDO
          </button>
        )}

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        id
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        username
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        email
                      </th>
                      
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 bg-white">
                    {users.map((e: User, key: number) => (
                      <tr key={key}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {e.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.username}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.email}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Datatable;
