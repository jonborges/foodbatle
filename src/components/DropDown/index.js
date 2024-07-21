import React, { useState } from 'react';
import styles from './DropDown.module.css';

function DropDown ({ options, onSelect }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    onSelect(option);
  };

  return (
    <div className={styles.dropdown}>
      <div onClick={toggleOptions} className={styles.selectedOption}>
        {selectedOption || 'Escolha uma opção.'}
      </div>
      {showOptions && (
        <ul className={styles.optionsList}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className={styles.option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;