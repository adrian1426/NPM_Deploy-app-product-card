import React, { useContext } from 'react';
import productContext from '../../../context/productContext';
import styles from '../../../styles/styles.module.css';

interface Props {
  src?: string;
  alt?: string;
  className?: string;
};

const CardImage = (props: Props) => {
  const { src, alt, className } = props;
  const context = useContext(productContext);

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={src ? src : context.imgProduct}
      alt={alt ? alt : context.title}
    />
  );
};

export default CardImage;