import axios, {AxiosInstance, AxiosResponse} from 'axios';

const API_URL: string = import.meta.env.VITE_API_URL;

const api: AxiosInstance = axios.create();

export const getProducts = async (): Promise<AxiosResponse | unknown> => {
  try {
    const response: AxiosResponse = await api.get(API_URL);
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
}

