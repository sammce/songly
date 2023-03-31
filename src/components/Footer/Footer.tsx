import classes from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.filler}>
      <footer className={classes.footer}>
        <p>
          © {year} Songly - Made with{' '}
          <a target="_blank" href="https://react.dev/">
            React
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
