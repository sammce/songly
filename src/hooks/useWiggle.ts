import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

interface MinMax {
  min: number;
  max: number;
  speed: number;
}

type Position = [number, number, number];

export interface WiggleOptions {
  x: MinMax;
  y: MinMax;
  z: MinMax;
}

type MinMaxVector = MinMax & { direction: 0 | 1 };

const changeDirection = (newDirection: 0 | 1, index: number) => {
  return (direction: Position) => {
    const mutable = [...direction];
    mutable[index] = newDirection;
    return mutable as Position;
  };
};

const useWiggle = (options: WiggleOptions): Position => {
  Object.values(options).forEach((axis: MinMaxVector) => {
    axis.direction = 1;
  });

  const initialPosition = Object.values(options).map((axis: MinMaxVector) => {
    if (typeof axis === 'number') {
      return axis;
    } else if (axis) {
      return axis.max - axis.min / 2;
    }
    return 0;
  });

  const [position, setPosition] = useState(initialPosition);
  const [directions, setDirections] = useState<Position>([1, 1, 1]);
  const ranges = [options.x, options.y, options.z] as MinMaxVector[];

  useFrame(() => {
    setPosition((oldPosition) => {
      return oldPosition.map((pos, index) => {
        const range = ranges[index];

        if (range.min === range.max) return pos;

        if (pos < range.min) {
          pos = range.min;
          setDirections(changeDirection(1, index));
        } else if (pos > range.max) {
          pos = range.max;
          setDirections(changeDirection(0, index));
        }

        let easedSpeed = pos;
        if (directions[index] === 1) {
          return pos + range.speed;
        }
        return pos - range.speed;
      });
    });
  });

  return position as Position;
};

export default useWiggle;
