import Button from '../Button';
import classes from './Footer.module.css';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.filler}>
      <footer className={classes.footer}>
        <p>
          © <span className="gradient-text">Songly</span> {year} <br />
          CA115 Group R
        </p>
        <div className={classes.verticalRule}></div>
        <Link target="_blank" href="https://github.com/sammce/songly.git">
          <BsGithub color="var(--text-primary)" size={42} />
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
