'use client';
import '@/app/styles/globals.css';
import '@/app/styles/theme.css';
import { Open_Sans, Josefin_Sans, Nanum_Gothic } from 'next/font/google';
import StarryNightCanvas from '@/app/ui/components/common/background/StarryNightCanvas';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  display: 'swap',
});

export { josefinSans, nanumGothic };

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ko'>
      <head>
        <title>smpark&apos;s space</title>
        <meta name='description' content='smpark의 개인 웹페이지 입니다.' />
      </head>
      <body className={openSans.className}>
        <StarryNightCanvas />
        {children}
      </body>
    </html>
  );
};
export default PortfolioLayout;
