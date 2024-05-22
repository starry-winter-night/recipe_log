'use client';
import Navbar from '@/app/ui/components/portfolio/navbar/Navbar';
import Aside from '@/app/ui/components/portfolio/aside/Aside';
import styles from './layout.module.css';
import { usePortfolioStore } from '@/app/stores/portfoiloStore';
import { useEffect, useRef } from 'react';

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const setContainerRef = usePortfolioStore((state) => state.setContainerRef);

  useEffect(() => {
    if (containerRef.current) {
      setContainerRef(containerRef);
    }
  }, [containerRef, setContainerRef]);

  return (
    <div className={styles.container} ref={containerRef}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <aside className={styles.aside}>
        <Aside />
      </aside>
      <main>{children}</main>
      <footer>Footer Content</footer>
    </div>
  );
};
export default PortfolioLayout;
