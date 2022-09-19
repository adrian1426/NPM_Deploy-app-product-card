import React from 'react';
import Card from '../card/Card';
import { useProduct } from '../../../hooks/useProduct';
import srcNoImage from '../../../assets/no-image.jpg';
import styles from '../../../styles/styles.module.css';
import '../../../styles/custom-styles.css';
import { ProductProvider } from '../../../context/productContext';
import { Props } from '../../product/interfaces/ProductInterface';

const Cart = (props: Props) => {
  const { product: { img, title, id }, value, onChange = () => { } } = props;
  const { counter, increaseCounter } = useProduct();

  const imgProduct = img ? img : srcNoImage;

  const isControlled = value ? true : false;

  const newCounter = isControlled ? Math.max(value[id]?.count, 0) : counter;

  return (
    <Card
      className="bg-dark"
      style={{ border: '1px solid white', width: '120px' }}
    >
      {() => (
        <ProductProvider
          value={{ imgProduct, title }}
        >
          <Card.Image className='cutom-image' />

          <Card.Actions className='custom-actions'>
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
          </Card.Actions>
        </ProductProvider>
      )}
    </Card>
  );
};

export default Cart;