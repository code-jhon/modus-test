import React from "react";
import { Product } from "../utils/entities";
import ProductItem from "./ProductItem";

interface ProductsListProps {
  data: Product[];
  setImageParam: React.Dispatch<React.SetStateAction<string>>;
}

const ProductsList: React.FC<ProductsListProps> = ({ data, setImageParam } ) => {
  const handlerClick = (imageParam: string) => {
    setImageParam(imageParam);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
      {data.map((product) => (<div key={product.id}><ProductItem product={product} handlerClick={handlerClick} /></div>) )}
    </div>
  );
}

export default ProductsList;