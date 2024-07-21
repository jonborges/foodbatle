// src/pages/FoodBattle.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './FoodBattle.module.css';
import FoodCard from '../../components/FoodCard';
import ButtonBurguer from '../../components/ButtonBurguer';

// Dados de exemplo para diferentes categorias
const foodOptions = {
  cervejas: [
    { id: 'heineken', name: 'Heineken', image: '/images/cervejas/heineken.jpg' },
    { id: 'budweiser', name: 'Budweiser', image: '/images/cervejas/budweiser.jpg' },
    { id: 'corona', name: 'Corona', image: '/images/cervejas/corona.jpg' },
    { id: 'stella', name: 'Stella Artois', image: '/images/cervejas/stella.jpg' },
    { id: 'skol', name: 'Skol', image: '/images/cervejas/skol.jpg' },
    { id: 'brahma', name: 'Brahma', image: '/images/cervejas/brahma.jpg' },
    { id: 'antarctica', name: 'Antarctica', image: '/images/cervejas/antarctica.jpg' },
    { id: 'bohemia', name: 'Bohemia', image: '/images/cervejas/bohemia.jpg' },
    { id: 'eisenbahn', name: 'Eisenbahn', image: '/images/cervejas/eisenbahn.jpg' },
    { id: 'itaipava', name: 'Itaipava', image: '/images/cervejas/itaipava.jpg' },
    { id: 'schin', name: 'Schin', image: '/images/cervejas/schin.jpg' },
    { id: 'amstel', name: 'Amstel', image: '/images/cervejas/amstel.jpg' },
    { id: 'devassa', name: 'Devassa', image: '/images/cervejas/devassa.jpg' },
    { id: 'petra', name: 'Petra', image: '/images/cervejas/petra.jpg' },
    { id: 'colorado', name: 'Colorado', image: '/images/cervejas/colorado.jpg' }
  ],
  chocolates: [
    { id: 'lindt', name: 'Lindt', image: '/images/chocolates/lindt.jpg' },
    { id: 'milka', name: 'Milka', image: '/images/chocolates/milka.jpg' },
    { id: 'hershey', name: 'Hershey', image: '/images/chocolates/hershey.jpg' },
    { id: 'nestle', name: 'Nestlé', image: '/images/chocolates/nestle.jpg' },
    { id: 'garoto', name: 'Garoto', image: '/images/chocolates/garoto.jpg' },
    { id: 'kitkat', name: 'KitKat', image: '/images/chocolates/kitkat.jpg' },
    { id: 'snickers', name: 'Snickers', image: '/images/chocolates/snickers.jpg' },
    { id: 'caribe', name: 'Caribe', image: '/images/chocolates/caribe.jpg' },
    { id: 'twix', name: 'Twix', image: '/images/chocolates/twix.jpg' },
    { id: 'toblerone', name: 'Toblerone', image: '/images/chocolates/toblerone.jpg' },
    { id: 'diamante', name: 'Diamante', image: '/images/chocolates/diamante.jpg' },
    { id: 'reese', name: 'Reese', image: '/images/chocolates/reese.jpg' },
    { id: 'butterfinger', name: 'Butterfinger', image: '/images/chocolates/butterfinger.jpg' },
    { id: 'm&ms', name: 'M&Ms', image: '/images/chocolates/m&ms.jpg' },
    { id: 'baton', name: 'Baton', image: '/images/chocolates/baton.jpg' }
  ],
  bolos: [
    { id: 'chocolate', name: 'Bolo de Chocolate', image: '/images/bolos/chocolate.jpg' },
    { id: 'cenoura', name: 'Bolo de Cenoura', image: '/images/bolos/cenoura.jpg' },
    { id: 'limao', name: 'Bolo de Limão', image: '/images/bolos/limao.jpg' },
    { id: 'fuba', name: 'Bolo de Fubá', image: '/images/bolos/fuba.jpg' },
    { id: 'maracuja', name: 'Bolo de Maracujá', image: '/images/bolos/maracuja.jpg' },
    { id: 'baunilha', name: 'Bolo de Baunilha', image: '/images/bolos/baunilha.jpg' },
    { id: 'morango', name: 'Bolo de Morango', image: '/images/bolos/morango.jpg' },
    { id: 'coco', name: 'Bolo de Coco', image: '/images/bolos/coco.jpg' },
    { id: 'prestigio', name: 'Prestígio', image: '/images/bolos/prestigio.jpg' },
    { id: 'laranja', name: 'Bolo de Laranja', image: '/images/bolos/laranja.jpg' },
    { id: 'cafe', name: 'Bolo de Café', image: '/images/bolos/cafe.jpg' },
    { id: 'abacaxi', name: 'Bolo de Abacaxi', image: '/images/bolos/abacaxi.jpg' },
    { id: 'boloderolo', name: 'Bolo de Rolo', image: '/images/bolos/boloderolo.jpg' },
    { id: 'doce_de_leite', name: 'Bolo de Doce de Leite', image: '/images/bolos/doce_de_leite.jpg' },
    { id: 'mel', name: 'Bolo de Pão de Mel', image: '/images/bolos/mel.jpg' }
  ],
  salgadinhos: [
    { id: 'coxinha', name: 'Coxinha', image: '/images/salgadinhos/coxinha.jpg' },
    { id: 'empada', name: 'Empada', image: '/images/salgadinhos/empada.jpg' },
    { id: 'kibe', name: 'Kibe', image: '/images/salgadinhos/kibe.jpg' },
    { id: 'pastel', name: 'Pastel', image: '/images/salgadinhos/pastel.jpg' },
    { id: 'esfiha', name: 'Esfiha', image: '/images/salgadinhos/esfiha.jpg' },
    { id: 'joelho', name: 'Joelho', image: '/images/salgadinhos/joelho.jpg' },
    { id: 'risole', name: 'Risolé', image: '/images/salgadinhos/risole.jpg' },
    { id: 'empadinha', name: 'Empadinha', image: '/images/salgadinhos/acaraje.jpg' },
    { id: 'bolinho_de_chuva', name: 'Bolinho de Chuva', image: '/images/salgadinhos/bolinho_de_chuva.jpg' },
    { id: 'croquete', name: 'Croquete', image: '/images/salgadinhos/croquete.jpg' },
    { id: 'quibe_frito', name: 'Quibe Frito', image: '/images/salgadinhos/quibe_frito.jpg' },
    { id: 'bolinho_de_bacalhau', name: 'Bolinho de Bacalhau', image: '/images/salgadinhos/bolinho_de_bacalhau.jpg' },
    { id: 'torresmo', name: 'Torresmo', image: '/images/salgadinhos/torresmo.jpg' },
    { id: 'cheeseball', name: 'Cheeseball', image: '/images/salgadinhos/bolinhadequeijo.jpg' },
    { id: 'bolinho_de_mandioca', name: 'Bolinho de Mandioca', image: '/images/salgadinhos/bolinho_de_mandioca.jpg' }
  ],
  biscoitos: [
    { id: 'oreo', name: 'Oreo', image: '/images/biscoitos/oreo.jpg' },
    { id: 'clubsocial', name: 'Club Social', image: '/images/biscoitos/clubsocial.jpg' },
    { id: 'maizena', name: 'Maizena', image: '/images/biscoitos/maizena.jpg' },
    { id: 'trakinas', name: 'Trakinas', image: '/images/biscoitos/trakinas.jpg' },
    { id: 'delicia', name: 'Delícia', image: '/images/biscoitos/delicia.jpg' },
    { id: 'bauduco', name: 'Bauduco', image: '/images/biscoitos/bauduco.jpg' },
    { id: 'bueno', name: 'Bueno', image: '/images/biscoitos/bueno.jpg' },
    { id: 'trakinas', name: 'Trakinas', image: '/images/biscoitos/trakinas.jpg' },
    { id: 'delicia', name: 'Delícia', image: '/images/biscoitos/delicia.jpg' },
    { id: 'recheio', name: 'Recheio', image: '/images/biscoitos/recheio.jpg' },
    { id: 'passatempo', name: 'Passatempo', image: '/images/biscoitos/passatempo.jpg' },
    { id: 'calypso', name: 'Calypso', image: '/images/biscoitos/calypso.jpg' },
    { id: 'negresco', name: 'Negresco', image: '/images/biscoitos/negresco.jpg' },
    { id: 'champagne', name: 'Champagne', image: '/images/biscoitos/champagne.jpg' },
    { id: 'bis', name: 'Bis', image: '/images/biscoitos/bis.jpg' },
    { id: 'polvilho', name: 'Polvilho', image: '/images/biscoitos/polvilho.jpg' },
    { id: 'biscoito_de_arroz', name: 'Biscoito de Arroz', image: '/images/biscoitos/biscoito_de_arroz.jpg' },
    { id: 'biscoito_de_agua_e_sal', name: 'Biscoito de Água e Sal', image: '/images/biscoitos/biscoito_de_agua_e_sal.jpg' },
    { id: 'biscoito_de_queijo', name: 'Biscoito de Queijo', image: '/images/biscoitos/biscoito_de_queijo.jpg' },
    { id: 'piraque', name: 'Piraquê de chocolate', image: '/images/biscoitos/piraque.jpg' },
    { id: 'biscoito_da_vaquinha', name: 'Biscoito da Vaquinha', image: '/images/biscoitos/biscoito_da_vaquinha' }
  ] 
  //Adicione o que precisar...mas lembre de Adicionar antes no Home a categoria
};

function Disputa() {
  const { category } = useParams();
  const [currentPair, setCurrentPair] = useState([]);
  const [remainingOptions, setRemainingOptions] = useState([]);
  const [finalChoice, setFinalChoice] = useState(null);

  useEffect(() => {
    const items = foodOptions[category];
    if (items && items.length > 1) {
      setCurrentPair([items[0], items[1]]);
      setRemainingOptions(items.slice(2));
    }
  }, [category]);

  const handleChoice = (chosenOption) => {
    if (remainingOptions.length === 0) {
      setFinalChoice(chosenOption);
    } else {
      const nextOption = remainingOptions.shift();
      setCurrentPair([chosenOption, nextOption]);
      setRemainingOptions([...remainingOptions]);
    }
  };

  return (
     <div className={styles.container}>
      <ButtonBurguer/>
      <div className={styles.container}>
      {finalChoice ? (
        <div className={styles.finalChoice}>
          <h2>O vencedor é:</h2>
          <FoodCard
            name={finalChoice.name}
            image={finalChoice.image}
            isFinalChoice={true}
          />
        </div>
        
      )
      
      : (
        currentPair.length === 2 && (
          <div className={styles.comparisonContainer}>
            {currentPair.map((option, index) => (
          <FoodCard
             key={index}
             name={option.name}
             image={option.image}
             onClick={() => handleChoice(option)}
             isFinalChoice={false}
              />
            ))}
          </div>
        )
      )}
    </div>
     
     </ div>
  )
    
}

export default Disputa;