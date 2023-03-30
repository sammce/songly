import { useEffect, useState } from 'react';

const DesktopOnly: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      setIsDesktop(isDesktop);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isDesktop) return null;

  return <>{children}</>;
};

export default DesktopOnly;
