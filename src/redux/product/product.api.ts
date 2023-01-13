import { Product } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getProductsAPI = async () => {
  let response: AxiosResponse<Product[]> = await axios.get(
    "https://marmalade-canyon-doll.glitch.me/products"
  );
  return response.data;
};

export const getProductAPI = async (id: string) => {
  let response: AxiosResponse<Product[]> = await axios.get(
    `https://marmalade-canyon-doll.glitch.me/products/${id}`
  );
  return response.data;
};
