import {useContext, useState} from 'react';
import {CoinsContext} from '../../../context/CoinsContext';
import styles from '../../../styles/Components/Calculator.module.scss';

const Select = ({coin, onChange}) => {
  const coins = useContext(CoinsContext);

  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => setIsOpen(!isOpen);

  const selectHandler = val => {
    onChange(val);
    isOpenHandler();
  };

  return (
    <div className={styles.selectWrapper}>
      <button
        className={`${styles.selectButton} ${isOpen ? styles.selectButtonActive : ''}`}
        onClick={isOpenHandler}
      >
        {coin.name}
        <span className={`${styles.selectArrow} ${isOpen ? styles.selectArrowActive : ''}`}/>
      </button>
      <div className={`${styles.coinList} ${isOpen ? styles.coinListOpen : ''}`}>
        {coins && coins.map(item =>
          <button
            onClick={() => selectHandler(item)}
            key={item.id}
            className={`${styles.listItem} ${item.id === coin.id ? styles.listItemActive : ''}`}
          >
            {`${item.name} (${item.symbol.toUpperCase()})`}
          </button>
        )}
      </div>
    </div>
  );
};

export default Select;