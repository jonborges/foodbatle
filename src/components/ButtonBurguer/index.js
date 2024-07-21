import React from 'react';
import { useNavigate } from 'react-router-dom';
import hamburgerIcon from "./hamburger-icon.png" // Ajuste o caminho conforme necessário
import styles from './ButtonBurguer.module.css'; 

const ButtonBurguer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <img src={hamburgerIcon} alt="Menu" className={styles.icon} />
    </button>
  );
};

export default ButtonBurguer;