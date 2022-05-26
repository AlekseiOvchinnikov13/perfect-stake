import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import styles from '../../styles/Components/Layout.module.scss';
import {useLayoutEffect, useState} from 'react';
import {isBrowser} from '../../utils';

const Layout = ({children}) => {
  const [, setSize] = useState([0, 0]);
  const updateSize = () => isBrowser && setSize([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    isBrowser && window.addEventListener('resize', updateSize);
    updateSize();
    return () => isBrowser && window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
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
    </>
  );
};

export default Layout;