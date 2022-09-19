import React from 'react';
import styles from '../../../styles/styles.module.css';
import { PropsAction } from '../../../interfaces/ChildrenInterface';

const CardActions = (props: PropsAction) => {
  const { children, className } = props;

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      {children}
    </div>
  );
};

export default CardActions;