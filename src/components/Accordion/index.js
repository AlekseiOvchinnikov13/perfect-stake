import styles from '../../styles/Components/Accordion.module.scss';
import {useState} from 'react';
import Link from 'next/link';

const Accordion = ({data: {title, content, href}, isHome}) => {
  const [isActive, setIsActive] = useState(false);

  const arrowHandler = () => setIsActive(!isActive);

  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionTitle}>
        <p className={styles.text}>
          {title}
        </p>
        <button
          onClick={arrowHandler}
          className={`${styles.arrow} ${isActive ? styles.arrowActive : ''}`}
        />
      </div>
      <div
        className={`${styles.accordionContent} ${isActive ? styles.accordionContentActive : ''} ${isHome ? styles.accordionContentHome : ''}`}
        dangerouslySetInnerHTML={{
          __html: `${content}`
        }}
      />
      {isHome && isActive &&
        <Link href={`/iss#${href}`}>
          <a className={styles.learnMore}>
            learn more
          </a>
        </Link>
      }
    </div>
  );
};

export default Accordion;