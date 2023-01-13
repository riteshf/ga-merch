import { Product } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getProductsAPI = async () => {
  let response: AxiosResponse<Product[]> = await axios.get(
    `${process.env.BACKEND_URL}/products`
  );
  return response.data;
};

export const getProductAPI = async (id: string) => {
  let response: AxiosResponse<Product[]> = await axios.get(
    `${process.env.BACKEND_URL}/products/${id}`
  );
  return response.data;
};
