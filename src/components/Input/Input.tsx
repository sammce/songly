import { cn } from '@/util';
import classes from './Input.module.css';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <label className={classes.label}>
      {label}
      <input className={classes.input} {...props} />
    </label>
  );
};

export const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  return (
    <label className={classes.label}>
      {label}
      <textarea
        rows={4}
        className={cn(classes.input, classes.textarea)}
        {...props}
      />
    </label>
  );
};

export default Input;
