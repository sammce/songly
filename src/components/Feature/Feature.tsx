import { cnIf } from '@/util/cn';
import classes from './Feature.module.css';

interface FeatureProps {
  children: React.ReactNode;
  float?: 'left' | 'right';
  lift?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ children, float, lift = false }) => {
  const featureClasses = cnIf({
    [classes.feature]: true,
    [classes.floatLeft]: float === 'left',
    [classes.floatRight]: float === 'right',
    [classes.lift]: lift,
  });

  return <div className={featureClasses}>{children}</div>;
};

export default Feature;
