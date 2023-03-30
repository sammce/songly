import { useWidescreen } from '@/hooks';
import { useEffect, useState } from 'react';

interface WidescreenOnlyProps {
  inverted?: boolean;
}

const WidescreenOnly: React.FC<
  React.PropsWithChildren<WidescreenOnlyProps>
> = ({ children, inverted = false }) => {
  const isWidescreen = useWidescreen();

  // XOR operator results in the following truth table:
  //     W    I    |    R
  // --------------|----------
  //     0    0    |    0
  //     0    1    |    1
  //     1    0    |    1
  //     1    1    |    0
  // This models the behaviour we want
  if (!(+inverted ^ +isWidescreen)) return null;

  return <>{children}</>;
};

export default WidescreenOnly;
