import classNames from 'classnames';
import styles from '../../styles/Components/SectionTitle.module.scss';

const SectionTitle = ({label, isLeft, isLight, isContact}) => {
  const classes = classNames(
    styles.title,
    isLeft ? styles.titleLeft : '',
    isLight ? styles.backgroundColorLight : styles.backgroundColorDefault,
    isContact ? styles.titleContact : ''
  );

  return (
    <h6 className={classes}>{label}</h6>
  );
};

export default SectionTitle;