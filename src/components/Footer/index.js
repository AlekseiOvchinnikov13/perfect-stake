import classNames from 'classnames';
import styles from '../../styles/Components/Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const classes = classNames(styles.footer, 'container');

  return (
    <footer className={classes}>
      <div className={styles.gradient}/>
      <p>perfect stake &copy;&nbsp;2019-{currentYear}</p>
    </footer>
  );
};

export default Footer;