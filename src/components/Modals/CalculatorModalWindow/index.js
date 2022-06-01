import ModalWindow from '../ModalWindow';
import styles from '../../../styles/Components/ModalWindow.module.scss';
import Toggle from '../../Calculator/Toggle';

const CalculatorModalWindow = ({onClick, visible}) => {

  return (
    <ModalWindow
      onClose={onClick}
      visible={visible}
      title="Calculator"
      className={styles.calculatorModalWindow}
      isCalc
    >
      <Toggle/>
    </ModalWindow>
  );
};

export default CalculatorModalWindow;