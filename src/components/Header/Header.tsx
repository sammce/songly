import { useState } from 'react';
import Button from '../Button';
import classes from './Header.module.css';
import Link, { LinkProps } from 'next/link';
import { cn } from '@/util';
import { useRouter } from 'next/router';

import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import WidescreenOnly from '../WidescreenOnly';
import { useWidescreen } from '@/hooks';
import Drawer from '../Drawer';
import { cnIf } from '@/util/cn';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isWidescreen = useWidescreen();

  const drawerFunctions = {
    toggle: () => setDrawerOpen((prev) => !prev),
    open: () => setDrawerOpen(true),
    close: () => setDrawerOpen(false),
  };

  const Linkable: React.FC<React.PropsWithChildren<LinkProps>> = ({
    children,
    href,
    ...props
  }) => {
    const router = useRouter();
    const className = cnIf({ [classes.active]: router.pathname === href });

    return (
      <Link
        onClick={drawerFunctions.close}
        href={href}
        className={className}
        {...props}
      >
        {children}
      </Link>
    );
  };

  let navContent: React.ReactNode = null;

  if (isWidescreen) {
    navContent = (
      <>
        <div className={classes.nav}>
          <Linkable href="/premium">Songly premium</Linkable>
          <Linkable href="/about">About</Linkable>
          <Linkable href="/support">Support</Linkable>
        </div>
        <Link legacyBehavior href="/download">
          <Button onClick={drawerFunctions.close} variant="outline">
            Download
          </Button>
        </Link>
      </>
    );
  } else {
    navContent = (
      <Drawer onClose={drawerFunctions.close} open={drawerOpen}>
        <nav className={cn(classes.nav, classes.vertical)}>
          <Linkable href="/premium">Get Songly premium</Linkable>
          <Linkable href="/about">About</Linkable>
          <Linkable href="/support">Support</Linkable>
        </nav>

        <hr />

        <Link legacyBehavior href="/download">
          <Button
            onClick={drawerFunctions.close}
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
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
