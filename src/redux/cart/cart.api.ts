import { Cart } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getCartAPI = async () => {
  let response: AxiosResponse<Cart[]> = await axios.get(
    `${process.env.BACKEND_URL}/carts`
  );
  return response.data;
};

export const addItemToCartAPI = async (productId: number, quantity: number) => {
  let response: AxiosResponse<Cart> = await axios.post(
    `${process.env.BACKEND_URL}/carts`
    { productId, quantity }
  );
  return response.data;
};
