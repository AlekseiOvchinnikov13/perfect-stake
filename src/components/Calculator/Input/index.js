import styles from '../../../styles/Components/Calculator.module.scss';

const Input = ({isActive, coin, value, setValue}) => {

  return (
    <div className={styles.inputWrapper}>
      <span className={styles.label}>
        {isActive ? 'Quantity' : 'Amount'}
      </span>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${isActive ? styles.inputActive : ''}`}
          type="number"
          step="any"
          min="0"
          onChange={setValue}
          value={value}
          readOnly={!isActive}
        />
        <span className={styles.symbol}>{coin ? `(${coin.symbol})` : '($)'}</span>
      </div>
    </div>
  );
};

export default Input;