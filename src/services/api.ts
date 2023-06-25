import { QueryFunction } from 'react-query';
import axios, {AxiosInstance, AxiosResponse} from 'axios';
import { Product } from '../utils/entities';

const API_URL: string = import.meta.env.VITE_API_URL;

const api: AxiosInstance = axios.create();

export const getProducts: QueryFunction<Product[]> = async () => {
  try {
    const response: AxiosResponse = await api.get(API_URL);
    return response.data.splice(0, 8);
  } catch (error: unknown) {
    throw error;
  }
}
