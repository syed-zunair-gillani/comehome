import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import '../styles/globals.css';
import lightTheme from '@/utils/theme';
import createEmotionCache from '@/utils/createEmotionCache';

import { Public_Sans } from 'next/font/google'
import Header from '@/components/header/Header';
import Logo from '@/components/logo/Logo';
import Footer from '@/components/footer/Footer';


const clientSideEmotionCache = createEmotionCache();

const PublicSans = Public_Sans({ subsets: ['latin'] })


const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <main className={PublicSans.className}>
    <Header/>
    <Logo/>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
    <Footer/>
    </main>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};