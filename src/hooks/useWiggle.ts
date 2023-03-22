import { easeInOut } from '@/util';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { Triplet } from '@/types';

interface Range {
  min?: number;
  max?: number;
  duration?: number;
}

export interface MergedRange {
  min: number;
  max: number;
  duration: number;
}

const defaultMinMax: MergedRange = {
  min: 0,
  max: 0,
  duration: 1,
};

type Position = Triplet<number>;
export type Direction = 0 | 1;

interface WiggleOptions {
  x?: Range;
  y?: Range;
  z?: Range;
}

export interface MergedWiggleOptions {
  x: MergedRange;
  y: MergedRange;
  z: MergedRange;
}

const defaultOptions = {
  x: { ...defaultMinMax },
  y: { ...defaultMinMax },
  z: { ...defaultMinMax },
};

const changeDirection = (newDirection: 0 | 1, index: number) => {
  return (direction: Triplet<Direction>) => {
    const mutable = [...direction];
    mutable[index] = newDirection;
    return mutable as Triplet<Direction>;
  };
};

const merge = (axes: Range[]): MergedWiggleOptions => {
  const newAxes = axes.map((axis) => ({ ...defaultMinMax, ...axis }));
  return {
    x: newAxes[0],
    y: newAxes[1],
    z: newAxes[2],
  };
};

const useWiggle = (options: WiggleOptions): Position => {
  const mergedOptions = merge(Object.values({ ...defaultOptions, ...options }));

  const initialPosition = Object.values(mergedOptions).map(
    (axis: MergedRange) => {
      if (typeof axis === 'number') {
        return axis;
      } else if (axis) {
        return axis.max - axis.min / 2;
      }
      return 0;
    }
  );

  const [position, setPosition] = useState(initialPosition);
  const [directions, setDirections] = useState<Triplet<Direction>>([1, 1, 1]);
  const ranges = [
    mergedOptions.x,
    mergedOptions.y,
    mergedOptions.z,
  ] as MergedRange[];

  useFrame(() => {
    setPosition((oldPosition) => {
      return oldPosition.map((pos, index) => {
        const range = ranges[index];
        let direction = directions[index];

        if (range.min === range.max) return pos;

        if (pos < range.min) {
          pos = range.min;
          direction = 1;
        } else if (pos > range.max) {
          pos = range.max;
          direction = 0;
        }

        setDirections(changeDirection(direction, index));

        if (direction === 1) {
          return pos + easeInOut(pos, range);
        }
        return pos - easeInOut(pos, range);
      });
    });
  });

  return position as Position;
};

export default useWiggle;
