import { Header } from '@/components';
import { useWidescreen } from '@/hooks';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isDesktop = useWidescreen();

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
