import Navbar from '@/app/ui/components/portfolio/Navbar';

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>Footer Content</footer>
    </>
  );
};
export default PortfolioLayout;
