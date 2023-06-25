import React, { useState, createContext } from 'react';
import { useQuery } from 'react-query';
import { getProducts } from './api';

import { Product } from '../utils/entities';

type Props = {
  children: React.ReactNode;
}

export const ProductContext = createContext({} as any);

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { data, isLoading, isError, error } = useQuery<Product[], any>('products', getProducts);

  return (
    <ProductContext.Provider value={{products, setProducts}} >
      {children}
    </ProductContext.Provider>  
  );
}