import classes from './Button.module.css';
import { cnIf } from '@/util/cn';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'filled' | 'outline' | 'ghost';
  color?: 'primary' | 'highlight';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  color = 'primary',
  className,
  ...props
}) => {
  const buttonClasses = cnIf({
    [classes.button]: true,
    [className as string]: Boolean(className),
    [classes.highlight]: color === 'highlight',
    [classes.outline]: variant === 'outline',
    [classes.ghost]: variant === 'ghost',
  });

  return (
    <button tabIndex={0} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
