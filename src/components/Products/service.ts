import request from "../../requests";
import { ProductProps, ProductsProps } from "./types";

export function productsService({
  params,
}: {
  params: Object | null;
}): Promise<ProductsProps> {
  return request("/products", { params });
}

export function singleProductService({
  productId,
}: {
  productId: number;
}): Promise<ProductProps> {
  return request(`/products/${productId}`);
}
