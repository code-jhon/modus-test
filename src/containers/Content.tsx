import React from 'react';
import { useQuery } from 'react-query';

import Banner from '../components/Banner';
import ProductsList from '../components/ProductsList';

import { getProducts } from '../services/api';
import loading from '../assets/loading.gif';
import { Product } from '../utils/entities';

const Content: React.FC = () => {
  const [imageParam, setImageParam] = React.useState<string>("store");
  const { data, isLoading, isError, error } = useQuery<Product[], any>('products', getProducts);

  const content = (
    <div className='w-full align-middle'>
      { isLoading 
          ? (
              <div className="flex justify-center items-center">
                <img src={loading} alt="image" />
              </div>
            ) 
          : <ProductsList data={data} setImageParam={setImageParam} /> 
      }
    </div>
  )

  return (
    <>
      <Banner imageParam={imageParam} />
      <div className="container mx-auto px-6">
        { content }
      </div>
    </>
  );
}

export default Content;