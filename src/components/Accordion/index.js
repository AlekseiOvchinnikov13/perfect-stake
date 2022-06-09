import {useState} from 'react';
import Link from 'next/link';
import styles from '../../styles/Components/Accordion.module.scss';

const Accordion = ({data: {title, content, href}, isHome, isOpen}) => {
  const [isActive, setIsActive] = useState(isOpen || false);
  const arrowHandler = () => setIsActive(!isActive);

  return (
    <div
      className={`${styles.accordionItem} ${isHome ? styles.accordionItemHome : ''} ${isActive ? styles.accordionItemActive : ''}`}
      id={href}
    >
      <div className={styles.accordionTitle}>
        {!isHome && <div/>}
        <p className={styles.text}>
          {title}
        </p>
        <button
          onClick={arrowHandler}
          className={styles.arrow}
        />
      </div>
      <div
        className={styles.accordionContent}
        dangerouslySetInnerHTML={{
          __html: `${content}`
        }}
      />
      {isHome && isActive &&
        <Link href={`/infrastructure-security-statement#${href}`}>
          <a className={styles.learnMore}>
            learn more
          </a>
        </Link>
      }
    </div>
  );
};

export default Accordion;