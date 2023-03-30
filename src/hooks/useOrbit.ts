import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Triplet } from '@/types';
import { start } from 'repl';

const lerp = (min: number, max: number, a: number) => min * (1 - a) + max * a;

export interface UseOrbitOptions {
  center?: [number, number, number];
  radius?: number;
  direction?: 'clockwise' | 'counter-clockwise';
  axis?: number;
  startingPosition?: Triplet<number>;
  speed?: number;
}

const useOrbit = ({
  center = [0, 0, 0],
  radius = 1,
  axis = 1,
  speed = 1,
  direction = 'clockwise',
  startingPosition = [0, 0, 0],
}: UseOrbitOptions) => {
  const [position, setPosition] = useState(startingPosition);
  const [angle, setAngle] = useState(3);

  const sign = direction === 'clockwise' ? 1 : -1;

  useFrame(() => {
    const x = center[0] + Math.cos(angle) * radius;
    const y = center[1] + sign * Math.cos(angle) * radius * axis;
    const z = center[2] + sign * Math.sin(angle) * radius;
    setPosition([x, y, z]);
    setAngle(angle + speed * 0.01);
  });

  return position as Triplet<number>;
};

export default useOrbit;
