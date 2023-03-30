import { useFrame, type MeshProps } from '@react-three/fiber';
import { useState } from 'react';

type Rotation = [number, number, number];

export interface UseRotationOptions {
  x?: number | boolean;
  y?: number | boolean;
  z?: number | boolean;
  frequency?: number;
  rotation?: Rotation;
  freeze?: boolean;
}

const defaultUseRotationOptions: UseRotationOptions = {
  x: 0,
  y: 0,
  z: 0,
  frequency: 20,
  rotation: [0, 0, 0],
  freeze: false,
};

export const useRotation = (
  options: UseRotationOptions = defaultUseRotationOptions
) => {
  options = { ...defaultUseRotationOptions, ...options };

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
