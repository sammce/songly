import { cnIf } from '@/util/cn';
import classes from './Drawer.module.css';
import { useClickOutside } from '@/hooks';
import { useRef } from 'react';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const Drawer: React.FC<React.PropsWithChildren<DrawerProps>> = ({
  children,
  open,
  onClose,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useClickOutside({ exclude: [drawerRef], callback: onClose });

  const backdropClasses = cnIf({
    [classes.backdrop]: true,
    [classes.open]: open,
  });

  const drawerClasses = cnIf({
    [classes.drawer]: true,
    [classes.open]: open,
  });

  return (
    <>
      <div ref={drawerRef} className={drawerClasses}>
        {children}
      </div>
      <div className={backdropClasses}></div>
    </>
  );
};

export default Drawer;
