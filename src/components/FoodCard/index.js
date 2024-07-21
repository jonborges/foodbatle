import React from 'react';
import styles from './FoodCard.module.css';


const FoodCard = ({ image, name, onClick, isFinalChoice }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      {!isFinalChoice ? (
        <button className={styles.button} onClick={onClick}>
          {name}
        </button>
      ) : (
        <p className={styles.finalChoiceText}>{name}</p>
      )}
    </div>
  );
};

export default FoodCard;