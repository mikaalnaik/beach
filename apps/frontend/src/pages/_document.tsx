// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;400;500;700&display=swap" rel="stylesheet"></link>
        <Script
          strategy='afterInteractive'
          src="https://www.googletagmanager.com/gtag/js?id=G-LC1XE1N6HK"
        />
        <Script
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LC1XE1N6HK', { page_path: window.location.pathname });
            `,
          }}
        />

      </Head>
      <body>
        <Main />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <NextScript />
      </body>
    </Html>
  );
}
