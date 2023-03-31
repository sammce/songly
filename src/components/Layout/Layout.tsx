import { Header, Footer } from '@/components';
import classes from './Layout.module.css';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={classes.main}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
