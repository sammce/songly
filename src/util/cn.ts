export default function cn(...args: string[]) {
  return args.filter(Boolean).join(' ');
}

export function cnIf(mapping: Record<string, boolean>) {
  return cn(
    ...Object.entries(mapping)
      .filter(([, value]) => value)
      .map(([key]) => key)
  );
}
