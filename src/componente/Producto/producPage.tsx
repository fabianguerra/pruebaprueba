import { ProductForm } from "./Componentes/ProductForm";
import { ProductList } from "./Componentes/productList";

function ProducPage() {
  return (
    <>
      <div className="border text-center p-2 gap-2 justify-start bg-white">
        <ProductForm />
        <ProductList />
      </div>
    </>
  );
}

export default ProducPage;
