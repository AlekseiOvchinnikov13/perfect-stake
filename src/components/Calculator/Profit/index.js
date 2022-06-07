import {useEffect, useState} from 'react';
import {COINS_DATA} from '../../../data/coins';
import styles from '../../../styles/Components/Calculator.module.scss';

const Profit = ({coin, cryptoValue, usdValue, isMonth}) => {
  const apy = COINS_DATA.find(item => item.id === coin.id).apy?.replace('%', '') || 1;
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    setMultiplier(isMonth ? 1 / 12 : 1);
  }, [isMonth]);

  const calcProfit = val => {
    return (val * multiplier * apy / 100).toFixed(4);
  };

  return (
    <div className={styles.profitWrapper}>
      <p className={styles.profitText}>{`$ ${calcProfit(usdValue)}`}</p>
      <p className={styles.profitText}>{`${coin.symbol} ${calcProfit(cryptoValue)}`}</p>
    </div>
  );
};

export default Profit;