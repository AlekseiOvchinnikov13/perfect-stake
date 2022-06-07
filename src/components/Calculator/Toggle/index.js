import styles from '../../../styles/Components/Calculator.module.scss';
import {useState} from 'react';

const Toggle = ({isCurrency, onClick}) => {
  const [isActive, setIsActive] = useState(true);
  const toggleHandler = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <button
      onClick={toggleHandler}
      className={`${styles.toggle} ${isCurrency ? styles.toggleCurrency : styles.toggleTime}`}
    >
      <span className={`${styles.text} ${isActive ? styles.activeText : ''}`}>
        {isCurrency ? 'crypto' : 'month'}
      </span>
      <span className={`${styles.text} ${!isActive ? styles.activeText : ''}`}>
        {isCurrency ? '$' : 'year'}
      </span>
      <div className={`${styles.slider} ${!isActive ? styles.sliderActive : ''}`}/>
    </button>
  );
};

export default Toggle;