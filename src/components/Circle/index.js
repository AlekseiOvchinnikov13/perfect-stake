import classNames from 'classnames';
import styles from '../../styles/Components/Circle.module.scss';

const Circle = ({size, color, position}) => {

  const classes = classNames(
    styles.default,
    size,
    position
  );

  return (
    <div className={classes} style={{borderColor: color}}/>
  );
};

export default Circle;