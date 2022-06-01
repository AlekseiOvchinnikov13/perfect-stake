import classNames from 'classnames';
import PropTypes from 'prop-types';
import {useRef} from 'react';
import styles from '../../../styles/Components/ModalWindow.module.scss';

const ModalWindow = ({className, visible, onClose, title, children, footer, isCalc}) => {
  const modalDialogRef = useRef(null);
  const classes = classNames(styles.modal, className);

  const onCloseHandler = () => {
    modalDialogRef && modalDialogRef.current.classList.add(styles.modalDialogOut);
    setTimeout(() => onClose(), 500);
  };

  if (!visible) return null;

  return (
    <div className={classes} onClick={onCloseHandler}>
      <div className={styles.modalDialog} onClick={e => e.stopPropagation()} ref={modalDialogRef}>
        <div className={styles.modalHeader}>
          {isCalc && <div/>}
          <h4 className={styles.modalTitle}>{title}</h4>
          <button className={styles.modalClose} onClick={onCloseHandler}>&times;</button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>
            {children}
          </div>
        </div>
        {footer && <div className={styles.modalFooter}>{footer}</div>}
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element,
  footer: PropTypes.element
};

export default ModalWindow;