import { useWiggle } from '@/hooks';

type Range = [number, number];
type RangeWithSpeed = [number, number, number];

interface WiggleProps {
  children: React.ReactNode;
  x?: Range | RangeWithSpeed;
  y?: Range | RangeWithSpeed;
  z?: Range | RangeWithSpeed;
}

interface MergedWiggleProps {
  x: Range | RangeWithSpeed;
  y: Range | RangeWithSpeed;
  z: Range | RangeWithSpeed;
}

const defaultProps: MergedWiggleProps = {
  x: [0, 0, 1],
  y: [0, 0, 1],
  z: [0, 0, 1],
};

const normalise = (axis: Range | RangeWithSpeed) => {
  let min: number;
  let max: number;
  let speed = 1;

  if (axis.length === 3) {
    [min, max, speed] = axis;
  } else {
    [min, max] = axis;
  }

  return { min, max, speed };
};

const WigglingMesh: React.FC<WiggleProps> = ({ children, ...props }) => {
  const mergedProps = { ...defaultProps, ...props } as MergedWiggleProps;
  const [x, y, z] = Object.values(mergedProps).map(normalise);

  const position = useWiggle({ x, y, z });

  return (
    <mesh {...props} position={position}>
      {children}
    </mesh>
  );
};

export default WigglingMesh;
