import { createContext } from 'react';

interface ProductContext {
  imgProduct: string,
  title: string
};

const productContext = createContext({} as ProductContext);
export const { Provider: ProductProvider } = productContext;

export default productContext;