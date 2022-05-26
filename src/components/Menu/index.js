import {MENU_ITEMS} from '../../data/home';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from '../../styles/Components/Menu.module.scss';

const Menu = () => {
  const router = useRouter();

  return (
    <menu className={styles.menu}> {/*onClick={menuClickHandler} ref={menuRef}*/}
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