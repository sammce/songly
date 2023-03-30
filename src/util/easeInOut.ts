import type { MergedRange } from '@/hooks/useWiggle';

const MAX_SPEED = 0.15;
const MIN_SPEED = 0.02;

export default function easeInOut(pos: number, { min, max }: MergedRange) {
  const center = (max + min) / 2;
  const d_center = center - pos;

  const curveRange = max - center;

  // Imagine a quadratic curve such that the graph intersects the x-axis at
  // min and max, and the y coordinate of critical point is the max_speed.
  // The value of this function at any point will give us the speed at which
  // the object should move.

  // The curve is defined by the following equation:
  // Note: c is some multiple, a is the distance along the x-axis from the critical point
  // to the point of intersection with the x-axis, m is the max_speed, and x is the distance
  // from the current position to the center (critical point).

  //  * f(x) = c * (x-a)(x+a)
  //  * f(x) = c * (x^2 - a^2)
  // If you translate the curve so that the critical point is at (0, then:
  //  * m = c * (-a^2)
  //  * c = m / (-a^2)
  // Plugging c back into the equation:
  //  * f(x) = (m / (-a^2)) * (x^2 - a^2)
  //  * f(x) = ((m * x^2) - (m * a^2)) / -a^2
  //  * f(x) = ((m * x^2) / -a^2) + m

  // This is the equation we use below (almost). Remember that the roots
  // of the function are at min and max, so when at those points the speed will be 0.
  // We also add a minimum speed, which moves the roots further away from the center,
  // to make sure the object doesn't stop moving completely.
  //  * f(x) = ((m * x^2) / -a^2) + m + min_speed

  return (
    (-MAX_SPEED * d_center * d_center) / (curveRange * curveRange) +
    MAX_SPEED +
    MIN_SPEED
  );
}
