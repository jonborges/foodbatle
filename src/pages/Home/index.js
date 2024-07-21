// src/pages/Home.js
import { useNavigate } from 'react-router-dom';
import ButtonBurguer from "../../components/ButtonBurguer";
import DropDown from "../../components/DropDown";
import styles from "./Home.module.css";

const categories = ['cervejas', 'chocolates', 'bolos', 'salgadinhos', 'biscoitos'];

function Home() {
  const navigate = useNavigate();

  const handleSelect = (selectedOption) => {
    navigate(`/disputa/${selectedOption}`);
  };

  return (
    <div className={styles.container}>
      <ButtonBurguer />
      <h1>Escolha a categoria.</h1>
      <p>Disputa entre duas comidas, até sobrar somente uma.</p>
      <DropDown options={categories} onSelect={handleSelect} />
    </div>
  );
}

export default Home;
