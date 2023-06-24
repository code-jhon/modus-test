import React from 'react'
import { Product } from '../utils/entities'

type ProductItemProps = {
  product: Product;
  handlerClick: (imageParam: string) => void;
}

const ProductItem = ({ product, handlerClick }: ProductItemProps) => {
  const onClickHandler = () => {
    const imageParam = product.title.split(/\s+/).pop()?.toLowerCase() || "store";
    handlerClick(imageParam);
  }
  

  return (
    <div className="bg-gray-200 pb-4 rounded-lg" onClick={onClickHandler}>
      <img src={[...product.images].shift()} alt="Product Image" className="mb-2 w-full rounded-t-lg"  />
      <h3 className="text-xl text-center mb-2">{ product.title }</h3>
      <p className="text-gray-600 text-center">${ product.price }</p>
    </div>
  )
}

export default ProductItem

//{ id, title, category, description, images, variants, price, tags }