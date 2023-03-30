import { useWiggle } from '@/hooks';
import { MeshProps } from '@react-three/fiber';

type Range = [number, number];
type RangeWithDuration = [number, number, number];

export interface WigglingMeshProps extends React.PropsWithChildren<MeshProps> {
  x?: Range | RangeWithDuration;
  y?: Range | RangeWithDuration;
  z?: Range | RangeWithDuration;
}

interface MergedWiggleProps {
  x: Range | RangeWithDuration;
  y: Range | RangeWithDuration;
  z: Range | RangeWithDuration;
}

const defaultProps: MergedWiggleProps = {
  x: [0, 0, 1],
  y: [0, 0, 1],
  z: [0, 0, 1],
};

const normalise = (axis: Range | RangeWithDuration) => {
  let min: number;
  let max: number;
  let duration = 1;

  if (axis.length === 3) {
    [min, max, duration] = axis;
  } else {
    [min, max] = axis;
  }

  return { min, max, duration };
};

const WigglingMesh: React.FC<WigglingMeshProps> = ({ children, ...props }) => {
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
