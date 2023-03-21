import { useFrame, type MeshProps } from '@react-three/fiber';
import { useState } from 'react';
import { Euler, EulerOrder } from 'three';

type Rotation = [number, number, number];
export interface RotationProps extends MeshProps {
  x?: number | boolean;
  y?: number | boolean;
  z?: number | boolean;
  frequency?: number;
  rotation?: Rotation;
}

export interface UseRotationOptions extends RotationProps {
  freeze?: boolean;
}

const defaultRotationProps: RotationProps = {
  x: 0,
  y: 0,
  z: 0,
  frequency: 20,
  rotation: [0, 0, 0],
};

const defaultUseRotationOptions = {
  ...defaultRotationProps,
  freeze: false,
};

export const useRotation = (
  options: UseRotationOptions = defaultUseRotationOptions
) => {
  options = { ...defaultRotationProps, ...options };

  const [rotation, setRotation] = useState(options.rotation!);

  const speeds = [options.x, options.y, options.z].map((scalar) =>
    typeof scalar === 'number' ? scalar : Boolean(scalar) ? 0.01 : 0
  );

  useFrame(() =>
    setRotation(
      (oldRotation) =>
        oldRotation.map(
          (scalar, index) => (scalar += options.freeze ? 0 : speeds[index])
        ) as Rotation
    )
  );

  return rotation;
};

export default useRotation;
