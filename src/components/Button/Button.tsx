import classes from './Button.module.css';
import { cnIf } from '@/util/cn';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outline' | 'ghost';
  color?: 'primary' | 'highlight';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  color = 'primary',
}) => {
  const buttonClasses = cnIf({
    [classes.button]: true,
    [classes.highlight]: color === 'highlight',
    [classes.outline]: variant === 'outline',
    [classes.ghost]: variant === 'ghost',
  });

  return (
    <button tabIndex={0} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
