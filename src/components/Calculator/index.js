import {useContext, useEffect, useState} from 'react';
import {CoinsContext} from '../../context/CoinsContext';
import Toggle from './Toggle';
import Input from './Input';
import Profit from './Profit';
import Select from './Select';
import {COINS_DATA} from '../../data/coins';
import styles from '../../styles/Components/Calculator.module.scss';

const Calculator = () => {
  const coins = useContext(CoinsContext);

  const [isCrypto, setIsCrypto] = useState(true);
  const toggleCryptoHandler = () => {
    setIsCrypto(!isCrypto);
    setCryptoValue(1);
    setUsdValue(1);
  };

  const [isMonth, setIsMonth] = useState(true);
  const toggleTimeHandler = () => setIsMonth(!isMonth);

  const [activeCoin, setActiveCoin] = useState(coins.find(coin => coin.id === 'solana'));
  const changeActiveCoinHandler = obj => setActiveCoin(obj);

  const [cryptoValue, setCryptoValue] = useState(1);
  const [usdValue, setUsdValue] = useState(0);

  const calcInputValues = value => {
    if (value < 0) return;
    if (isCrypto) {
      setCryptoValue(value);
      setUsdValue(value * activeCoin.current_price);
    } else {
      setUsdValue(value);
      setCryptoValue(value / activeCoin.current_price);
    }
  };

  const inputChangeHandler = e => {
    calcInputValues(e.target.value);
  };

  useEffect(() => {
    calcInputValues(cryptoValue);
  }, [isCrypto, activeCoin]);


  return (
    <div className={styles.calculator}>
      <div className={styles.rowWrapper}>
        <Toggle isCurrency onClick={toggleCryptoHandler}/>
        <Select
          coin={activeCoin}
          onChange={changeActiveCoinHandler}
        />
      </div>

      <div className={styles.rowWrapper}>
        <Input
          isActive={isCrypto}
          coin={activeCoin}
          setValue={inputChangeHandler}
          value={cryptoValue}
        />
        <Input
          isActive={!isCrypto}
          setValue={inputChangeHandler}
          value={usdValue}
        />
      </div>
      
      <Toggle onClick={toggleTimeHandler}/>
      <Profit
        coin={activeCoin}
        isMonth={isMonth}
        cryptoValue={cryptoValue}
        usdValue={usdValue}
      />
      <a
        href={COINS_DATA.find(coin => coin.id === activeCoin.id).link}
        className={`stake-button-view ${styles.stakeButton}`}
        target={'_blank'}
        rel="noreferrer"
      >
        stake now
      </a>
    </div>
  );
};

export default Calculator;