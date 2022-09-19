import React from 'react';
import styles from '../../../styles/styles.module.css';
import { Props } from '../../../interfaces/ChildrenInterface';

const Card = (props: Props) => {
  const { children, className, ...rest } = props;

  const mifun = () => {
    console.log("Aquí mi fun");
  };

  return (
    <div
      className={`${styles.productCard} ${className}`}
      {...rest}
    >
      {children!({ name: 'AHH hernandez', mifun })}
    </div>
  );
};

export default Card;

