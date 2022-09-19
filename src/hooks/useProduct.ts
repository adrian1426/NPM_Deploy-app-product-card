import { useState } from 'react';
import { initValues } from '../components/product/interfaces/ProductInterface';

export const useProduct = (initialValues?: initValues) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || 0);

  const increaseCounter = (value: number) => {
    setCounter(prev => {
      if (prev === initialValues?.maxCount && value > 0) {
        return prev;
      }

      return Math.max(prev + value, 0);
    });
  }

  return {
    counter,
    increaseCounter
  };
};