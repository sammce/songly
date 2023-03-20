import useRotation, { RotationProps } from '@/hooks/useRotation';
import { useState, useCallback } from 'react';
import { OrbitControls } from '@react-three/drei';

const RotatingMesh: React.FC<RotationProps> = ({
  children,
  x,
  y,
  z,
  frequency,
  ...props
}) => {
  const [freezeRotation, setFreezeRotation] = useState(false);
  const rotation = useRotation({ x, y, z, frequency, freeze: freezeRotation });

  const handleOrbitStart = useCallback(() => setFreezeRotation(true), []);
  const handleOrbitEnd = useCallback(() => setFreezeRotation(false), []);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
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
