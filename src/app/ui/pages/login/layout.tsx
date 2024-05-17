const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <nav>123Navigation Bar</nav>
      </header>
      <main>{children}</main>
      <footer>Footer Content</footer>
    </>
  );
};
export default LoginLayout;
