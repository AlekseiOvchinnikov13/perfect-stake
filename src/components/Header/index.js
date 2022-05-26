import Menu from '../Menu';
import Logo from '../Logo';
import classNames from 'classnames';
import styles from '../../styles/Components/Header.module.scss';

const Header = () => {
  const classes = classNames(styles.header, 'container');

  return (
    <header className={classes}>
      <div className={styles.gradient}/>
      <Logo/>
      <Menu/>
    </header>
  );
};

export default Header;