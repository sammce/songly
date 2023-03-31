import { cnIf } from '@/util/cn';
import classes from './Feature.module.css';

interface FeatureProps {
  children: React.ReactNode;
  float?: 'left' | 'right';
  lift?: boolean;
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Feature: React.FC<FeatureProps> = ({
  children,
  float,
  lift = false,
  style = {},
}) => {
  const featureClasses = cnIf({
    [classes.feature]: true,
    [classes.floatLeft]: float === 'left',
    [classes.floatRight]: float === 'right',
    [classes.lift]: lift,
  });

  return (
    <div style={style} className={featureClasses}>
      {children}
    </div>
  );
};

export default Feature;
