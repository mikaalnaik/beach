import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/app.scss';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = url => {
    window.gtag('config', 'G-LC1XE1N6HK', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);


  return <Component {...pageProps} />;
}
