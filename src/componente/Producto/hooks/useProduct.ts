import {  useState } from "react";
import { ProductRequest } from "../Domain/proRequest";

const useProducts = () =>{
    const [productos, setProductos] = useState<ProductRequest[]>([]);

    const updateProductos = (newData:ProductRequest[]) => {
        setProductos(newData);
    }

    return {
        productos,
        setProductos,
        updateProductos
    }
}

export default useProducts;