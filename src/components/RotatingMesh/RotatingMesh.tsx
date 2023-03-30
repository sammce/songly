import useRotation, { UseRotationOptions } from '@/hooks/useRotation';
import { useState, useCallback } from 'react';
import { OrbitControls } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';

export type RotationProps = React.PropsWithChildren<
  Omit<UseRotationOptions, 'freeze'>
> & { noManualRotate?: boolean } & MeshProps;

const RotatingMesh: React.FC<RotationProps> = ({
  children,
  x,
  y,
  z,
  frequency,
  noManualRotate = false,
  ...props
}) => {
  const [freezeRotation, setFreezeRotation] = useState(false);
  const rotation = useRotation({
    x,
    y,
    z,
    frequency,
    freeze: freezeRotation,
    rotation: props.rotation,
  });

  const handleOrbitStart = useCallback(() => setFreezeRotation(true), []);
  const handleOrbitEnd = useCallback(() => setFreezeRotation(false), []);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={!noManualRotate}
        onStart={handleOrbitStart}
        onEnd={handleOrbitEnd}
      />
      <mesh {...props} rotation={rotation}>
        {children}
      </mesh>
    </>
  );
};

export default RotatingMesh;
