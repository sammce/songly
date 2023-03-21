import { useWiggle } from '@/hooks';
import { WiggleOptions } from '@/hooks/useWiggle';

type Range = [number, number];

interface WiggleProps {
  children: React.ReactNode;
  x?: Range;
  y?: Range;
  z?: Range;
}

interface MergedWiggleProps {
  x: Range;
  y: Range;
  z: Range;
}

const defaultProps: MergedWiggleProps = {
  x: [0, 0],
  y: [0, 0],
  z: [0, 0],
};

const WigglingMesh: React.FC<WiggleProps> = ({ children, ...props }) => {
  const mergedProps = { ...defaultProps, ...props } as MergedWiggleProps;
  const { x: mx, y: my, z: mz } = mergedProps;

  const position = useWiggle({
    x: {
      min: mx[0],
      max: mx[1],
    },
    y: {
      min: my[0],
      max: my[1],
    },
    z: {
      min: mz[0],
      max: mz[1],
    },
  });

  return (
    <mesh {...props} position={position}>
      {children}
    </mesh>
  );
};

export default WigglingMesh;
