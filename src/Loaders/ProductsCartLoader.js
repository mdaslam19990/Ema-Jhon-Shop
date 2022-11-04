import { storedData } from "../utilities/fakedb";

export const productsCartLoader = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const saveData = storedData();

  let initialData = [];
  for (const id in saveData) {
    const findData = products.find((product) => product.id === id);
    if (findData) {
      const quantity = saveData[id];
      findData.quantity = quantity;
      initialData.push(findData);
    }
  }

  return { products, initialData };
};
