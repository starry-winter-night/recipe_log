import './globals.css';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <nav>
          {/* 네비게이션 바 */}
          Navigation Bar
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        {/* 푸터 */}
        Footer Content
      </footer>
    </>
  );
}

export default Layout;
