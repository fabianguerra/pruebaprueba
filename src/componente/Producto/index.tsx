import { ProductosProvider } from "./ProductoProvider";
import ProducPage from "./producPage";

function Productos() {
  return (
    <>
      <ProductosProvider>
        <ProducPage />
      </ProductosProvider>
    </>
  );
}

export default Productos;
