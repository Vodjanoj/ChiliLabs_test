export const fetchProducts = async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd"
  );
  const result = await response.json();
  return result;
};

 
