import { Product } from "../components/types/components.types";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd"
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products. Status: ${response.status}`);
  }

  const result = await response.json();
  return result.products;
};
