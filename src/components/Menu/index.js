import {MENU_ITEMS} from '../../data/menu';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {isBrowser, isMobile} from '../../utils';
import {useEffect, useRef, useState} from 'react';
import styles from '../../styles/Components/Menu.module.scss';

const Menu = () => {
  const router = useRouter();

  const [isMobileState, setIsMobileState] = useState(false);

  useEffect(() => {
    setIsMobileState(isMobile());
  }, [isMobile()]);

  const menuRef = useRef(null);
  const menuClassToggle = () =>
    menuRef?.current && menuRef.current.classList.toggle(styles.menuMobileOpen);

  const burgerOnClick = () =>
    menuClassToggle();

  const menuClickHandler = e => {
    const node = e.target.classList.value;
    if (isMobileState && node.includes(styles.menuLink)) {
      menuClassToggle();
    }
  };

  return (
    <menu
      ref={menuRef}
      className={`${styles.menu} ${isMobileState ? styles.menuMobile : ''}`}
      onClick={menuClickHandler}
    >
      {isMobileState &&
        <button
          onClick={burgerOnClick}
          className={styles.burger}
        >
          <span className={`${styles.burgerStick} ${styles.topStick}`}/>
          <span className={`${styles.burgerStick} ${styles.middleStick}`}/>
          <span className={`${styles.burgerStick} ${styles.bottomStick}`}/>
        </button>
      }
      <ul className={styles.menuList}>
        {MENU_ITEMS.map(menuItem =>
          <li key={menuItem.label} className={styles.menuItem}>
            <Link href={menuItem.to}>
              <a className={`${styles.menuLink} ${router.asPath === menuItem.to ? styles.menuLink_active : ''}`}>
                {menuItem.label}
              </a>
            </Link>
          </li>
        )}
      </ul>
    </menu>
  );
};

export default Menu;