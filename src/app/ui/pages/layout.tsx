'use client';
import '@/app/styles/globals.css';
import '@/app/styles/theme.css';
import StarryNightCanvas from '../components/common/StarryNightCanvas';

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ko'>
      <head>
        <title>smpark&apos;s space</title>
        <meta name='description' content='smpark의 개인 웹페이지 입니다.' />
      </head>
      <body>
        <StarryNightCanvas />
        {children}
      </body>
    </html>
  );
};
export default PortfolioLayout;
