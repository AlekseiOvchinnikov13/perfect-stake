import classNames from 'classnames';
import styles from '../../styles/Components/SectionTitle.module.scss';

const SectionTitle = ({label, isRight}) => {
  const classes = classNames(styles.title, isRight ? styles.titleRight : '');

  return (
    <h6 className={classes}>{label}</h6>
  );
};

export default SectionTitle;