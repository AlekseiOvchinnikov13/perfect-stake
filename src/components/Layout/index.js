import {useEffect, useLayoutEffect, useState} from 'react';
import {isBrowser} from '../../utils';
import {useRouter} from 'next/router';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import Circle from '../Circle';
import styles from '../../styles/Components/Layout.module.scss';
import {
  brightestCircleColor, whiteCircleColor, orangeCircleColor, darkOrangeCircleColor, brightCircleColor
} from '../../styles/variables.module.scss';
import {
  xxxlCircle,
  xxlCircle,
  xlCircle,
  lCircle,
  mCircle,
  sCircle,
  xsCircle,
  xxsCircle,
  position1,
  position2,
  position3,
  position4,
  position5,
  position6,
  position7,
  position8,
  position9,
  position10,
} from '../../styles/Components/Circle.module.scss';

const Layout = ({children}) => {
  const [, setSize] = useState([0, 0]);
  const updateSize = () => isBrowser() && setSize([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    isBrowser() && window.addEventListener('resize', updateSize);
    updateSize();
    return () => isBrowser() && window.removeEventListener('resize', updateSize);
  }, []);

  const [visible, setVisible] = useState(false);
  const onScroll = () => isBrowser() && setVisible(window.scrollY > 0);

  const router = useRouter();
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    isBrowser() && document.addEventListener('scroll', onScroll);
    return () => isBrowser() && document.removeEventListener('scroll', onScroll);
  }, []);

  return (<>
    <Head>
      <title>Perfect Stake</title>
      <meta name="description" content="Generated by create next app"/>
      <link rel="icon" href="/assets/favicon/favicon.ico"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
      <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="apple-mobile-web-app-title" content="Perfect Stake"/>
      <meta name="application-name" content="Perfect Stake"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#0E1946"/>
    </Head>
    <Header/>
    <main className={styles.layout}>{children}</main>
    <Footer/>
    <div className={styles.circlesWrapper}>
      <Circle position={position1} size={xxxlCircle} color={brightestCircleColor}/>
      <Circle position={position2} size={xxsCircle} color={whiteCircleColor}/>
      <Circle position={position3} size={xsCircle} color={orangeCircleColor}/>
      {isHomePage &&
          <>
            <Circle position={position4} size={xxlCircle} color={darkOrangeCircleColor}/>
            <Circle position={position5} size={lCircle} color={orangeCircleColor}/>
            <Circle position={position6} size={xlCircle} color={whiteCircleColor}/>
          </>
      }
      <Circle position={position7} size={xxsCircle} color={whiteCircleColor}/>
      <Circle position={position8} size={mCircle} color={orangeCircleColor}/>
      <Circle position={position9} size={xxxlCircle} color={brightCircleColor}/>
      <Circle position={position10} size={sCircle} color={orangeCircleColor}/>
    </div>
    {visible && <ScrollToTop/>}
  </>
  );
};

export default Layout;