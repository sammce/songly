import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

interface IMinMax {
  min: number;
  max: number;
}

type Position = [number, number, number];

type MinMax = IMinMax | number;

export interface WiggleOptions {
  x?: MinMax;
  y?: MinMax;
  z?: MinMax;
}

type MinMaxVector = MinMax & { direction: 0 | 1 };

interface ExtendedWiggleOptions {
  x: MinMaxVector;
  y: MinMaxVector;
  z: MinMaxVector;
}

const defaultWiggleOptions = {
  x: 0,
  y: 0,
  z: 0,
};

const WIGGLE_SPEED = 0.1;

const useWiggle = (options: WiggleOptions): Position => {
  const extendedOptions = {
    ...defaultWiggleOptions,
    ...options,
  } as ExtendedWiggleOptions;

  Object.values(extendedOptions).forEach((axis: MinMaxVector) => {
    axis.direction = 1;
  });

  const initialPosition = Object.values(extendedOptions).map(
    (axis: MinMaxVector) => {
      if (typeof axis === 'number') {
        return axis;
      } else if (axis) {
        return axis.max - axis.min / 2;
      }
      return 0;
    }
  );

  const [position, setPosition] = useState(initialPosition);

  useFrame(() => {
    setPosition((oldPosition) => {
      const ranges = [extendedOptions.x, extendedOptions.y, extendedOptions.z];

      return oldPosition.map((pos, index) => {
        const range = ranges[index];

        if (typeof range === 'number') return pos;

        if (pos >= range.max || pos <= range.min) {
          range.direction = Number(!!!range.direction) as 0 | 1;
        }

        if (range.direction === 1) {
          return pos + WIGGLE_SPEED;
        }
        return pos - WIGGLE_SPEED;
      });
    });
  });

  return position as Position;
};

export default useWiggle;
