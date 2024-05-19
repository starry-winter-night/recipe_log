import React from 'react';
import Image from 'next/image';
import Logo from '../common/Logo';
import styles from './navbar.module.css';

// import RocketGuide from '../../../service/rocket_guide/rocket_guide';

const Navbar = () => {
  // const guide = useRef();

  // useEffect(() => {
  //   const rocketGuide = new RocketGuide(guide.current, portfolioRef.current);
  //   rocketGuide.start();
  // }, [guide, portfolioRef]);

  return (
    <nav className={styles.navbar}>
      <Logo />

      <div className={styles.guide} data-id='guide'>
        <Image src='/imgs/earth.png' alt='earth' width={50} height={50} data-id='earth' />
        <Image src='/imgs/spaceShip-unscreen-compress.gif' alt='spaceShip' width={50} height={30} data-id='rocket' />
        <Image src='/imgs/mars.png' alt='mars' width={50} height={50} data-id='mars' />
      </div>
    </nav>
  );
};

export default Navbar;
