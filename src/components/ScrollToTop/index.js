import styles from '../../styles/Components/ScrollToTop.module.scss';
import {isBrowser} from '../../utils';

const ScrollToTop = () => {
  const buttonHandler = () => {
    isBrowser && window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={buttonHandler}
      className={styles.circleToTop}
    />
  );
};

export default ScrollToTop;