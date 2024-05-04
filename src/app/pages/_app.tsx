import 'normalize.css';
import '@/app/styles/theme.css';
import '@/app/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/app/components/layout';

function RecipeLogApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default RecipeLogApp;
