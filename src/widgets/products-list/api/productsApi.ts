import axios from "axios";
import type { Product } from "@entities/product";

interface FetchProductsParams {
  limit?: number;
  skip?: number;
}

export const fetchProducts = async ({
  limit,
  skip,
}: FetchProductsParams = {}): Promise<Product[]> => {
  const queryParams = new URLSearchParams();
  if (skip !== undefined) {
    queryParams.append("skip", skip.toString());
  }
  if (limit !== undefined) {
    queryParams.append("limit", limit.toString());
  }

  const { data } = await axios.get(
    `https://dummyjson.com/products?${queryParams.toString()}`,
  );

  return data.products;
};
