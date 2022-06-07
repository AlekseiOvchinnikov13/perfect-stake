import ModalWindow from '../ModalWindow';
import Calculator from '../../Calculator';
import styles from '../../../styles/Components/ModalWindow.module.scss';

const CalculatorModalWindow = ({onClick, visible}) => {

  return (
    <ModalWindow
      onClose={onClick}
      visible={visible}
      title="Calculator"
      className={styles.calculatorModalWindow}
      isCalc
    >
      <Calculator/>
    </ModalWindow>
  );
};

export default CalculatorModalWindow;