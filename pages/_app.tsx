import '@/css/tailwind.css';
import '@/css/twemoji.css';
import '@/css/resume.css';
import '@/css/about.css';
import '@/css/prism.css';
import 'katex/dist/katex.css';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import siteMetadata from '@/data/siteMetadata';
import { SearchProvider } from 'pliny/search';
import LayoutWrapper from '@/components/LayoutWrapper';

if (!process.browser) React.useLayoutEffect = React.useEffect;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Script async data-website-id={siteMetadata.analytics.umamiWebsiteId} src="https://eu.umami.is/script.js" />
      {/* <Analytics analyticsConfig={siteMetadata.analytics} /> */}
      <LayoutWrapper>
        <SearchProvider searchConfig={siteMetadata.search}>
          <Component {...pageProps} />
        </SearchProvider>
      </LayoutWrapper>
    </>
  );
}
