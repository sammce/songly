import Button from '../Button';
import classes from './Header.module.css';
import Link from 'next/link';
import { cn } from '@/util';

const Header = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <Link href="/">
          <h1 className={cn(classes.brand, 'gradient-text')}>Songly</h1>
        </Link>
        <div className={classes.nav}>
          <Link href="/about">About</Link>
          <Link href="/support">Support</Link>
        </div>

        <Button variant="outline">Download</Button>
      </div>
      <div className={classes.tabbar}></div>
    </>
  );
};

export default Header;
