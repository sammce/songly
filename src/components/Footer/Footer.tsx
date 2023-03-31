import classes from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.filler}>
      <footer className={classes.footer}>
        <p>
          © {year} <span className="gradient-text">Songly</span> <br />
          CA115 Group R
        </p>
      </footer>
    </div>
  );
};

export default Footer;
