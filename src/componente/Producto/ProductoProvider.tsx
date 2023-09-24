import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

import { ProductRequest } from "./Domain/proRequest";
import useProductos from "./hooks/useProductos";

export interface IProductosContext {
  loading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  productosList: ProductRequest[];
  searchProductos: () => void;
  DeleteProductos: (idCategoria: number) => Promise<void>;
}

const ProductosContext = createContext({});

export const ProductosProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setIsLoading] = useState(true);

  const { getProductos, productos, handlerDelete } = useProductos();

  const storage: IProductosContext = {
    loading: loading,
    setIsLoading,
    productosList: productos,
    searchProductos: getProductos,
    DeleteProductos: handlerDelete,
  };

  return (
    <ProductosContext.Provider value={storage}>
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductosContext;
