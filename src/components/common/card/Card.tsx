import React from 'react';
import CardTitle from './CardTitle';
import styles from '../../../styles/styles.module.css';
import CardImage from './CardImage';
import CardActions from './CardActions';
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

Card.Title = CardTitle;
Card.Image = CardImage;
Card.Actions = CardActions;

export default Card;

