import React from 'react';
import Head from 'next/head';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recipe Log',
  description: '맛있었던 레시피를 저장하고 불러올 수 있는 웹 사이트 :)',
};

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>{metadata.title as string}</title>
        <meta name='description' content={metadata.description as string} />
      </Head>
      <h1>Welcome to Next.js 13 App</h1>
      <p>This is the home page of your Next.js application.</p>
    </div>
  );
};

export default HomePage;
