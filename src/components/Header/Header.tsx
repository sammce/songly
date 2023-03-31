import { useState } from 'react';
import Button from '../Button';
import classes from './Header.module.css';
import Link from 'next/link';
import { cn } from '@/util';

import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import WidescreenOnly from '../WidescreenOnly';
import { useWidescreen } from '@/hooks';
import Drawer from '../Drawer';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isWidescreen = useWidescreen();

  const drawerFunctions = {
    toggle: () => setDrawerOpen((prev) => !prev),
    open: () => setDrawerOpen(true),
    close: () => setDrawerOpen(false),
  };
  let navContent: React.ReactNode = null;
  if (isWidescreen) {
    navContent = (
      <>
        <div className={classes.nav}>
          <Link href="/about">About</Link>
          <Link href="/support">Support</Link>
        </div>
        <Link href="/download">
          <Button variant="outline">Download</Button>
        </Link>
      </>
    );
  } else {
    navContent = (
      <Drawer onClose={drawerFunctions.close} open={drawerOpen}>
        <nav className={cn(classes.nav, classes.vertical)}>
          <Link href="/about">About</Link>
          <Link href="/support">Support</Link>
        </nav>

        <hr />

        <Link href="/download">
          <Button style={{ width: '100%', marginTop: '0.5rem' }}>
            Download
          </Button>
        </Link>
      </Drawer>
    );
  }

  return (
    <>
      <header className={classes.wrapper}>
        <WidescreenOnly inverted>
          <Hamburger drawerOpen={drawerOpen} onClick={drawerFunctions.toggle} />
        </WidescreenOnly>
        <Link href="/">
          <h1 className={cn(classes.brand, 'gradient-text')}>Songly</h1>
        </Link>
        {navContent}
      </header>
      <div className={classes.tabbar}></div>
    </>
  );
};

interface HamburgerProps {
  drawerOpen: boolean;
  onClick: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({
  drawerOpen = false,
  onClick,
}) => {
  return (
    <Button variant="outline" onClick={onClick} square>
      {!drawerOpen ? <RxHamburgerMenu size={24} /> : <RxCross2 size={24} />}
    </Button>
  );
};

export default Header;
