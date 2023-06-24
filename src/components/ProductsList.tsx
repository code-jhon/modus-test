import React from "react";

import { Product } from "../utils/entities";
import ProductItem from "./ProductItem";
import ProductDetail from "./ProductDetail";

interface ProductsListProps {
  data: Product[] | undefined;
  setImageParam: React.Dispatch<React.SetStateAction<string>>;
}

const ProductsList: React.FC<ProductsListProps> = ({ data, setImageParam } ) => {
  const [product, setProduct] = React.useState<Product | null>(null);
  const handlerClick = (imageParam: string) => {
    setImageParam(imageParam);
  };

  const handleClose = () => {
    setProduct(null);
    setImageParam('store');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
      {data && data.map((product) => (<div key={product.id} onClick={()=>setProduct(product)}><ProductItem product={product} handlerClick={handlerClick} /></div>) )}
      { product !== null && <ProductDetail product={product} onClose={handleClose} />}
    </div>
  );
}

export default ProductsList;