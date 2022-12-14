import React from 'react';
import styles from '../../styles/styles.module.css';
import srcNoImage from '../../assets/no-image.jpg';
import { useProduct } from '../../hooks/useProduct';
import Card from '../common/card/Card';
import { ProductProvider } from '../../context/productContext';
import { Props } from './interfaces/ProductInterface';
import CardImage from '../common/card/CardImage';
import CardActions from '../common/card/CardActions';
import CardTitle from '../common/card/CardTitle';


const ProductCard = (props: Props) => {
  const { product: { img, title, id }, value, onChange = () => { }, initialValues } = props;
  const { counter, increaseCounter } = useProduct(initialValues!);

  const imgProduct = img ? img : srcNoImage;

  const isControlled = value ? true : false;
  const newCounter = isControlled ? Math.max(value[id]?.count, 0) : counter;

  return (
    <Card
      style={{ border: '1px solid white' }}
    >
      {
        () => (
          <ProductProvider
            value={{ imgProduct, title }}
          >
            <CardImage />
            <CardTitle />

            <CardActions>
              <button
                className={styles.buttonMinus}
                onClick={isControlled ? () => onChange(props.product, -1) : () => increaseCounter(-1)}
              >
                -
              </button>

              <div
                className={styles.countLabel}
              >
                {newCounter || 0}
              </div>

              <button
                className={styles.buttonAdd}
                onClick={isControlled ? () => onChange(props.product, 1) : () => increaseCounter(1)}
              >
                +
              </button>
            </CardActions>
          </ProductProvider>
        )
      }
    </Card>
  );
};

export default ProductCard;