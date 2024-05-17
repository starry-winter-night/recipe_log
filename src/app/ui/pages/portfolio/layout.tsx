const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <nav>Navigation Bar</nav>
      </header>
      <main>{children}</main>
      <footer>Footer Content</footer>
    </>
  );
};
export default PortfolioLayout;
