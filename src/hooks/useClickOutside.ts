import { useEffect } from 'react';

interface ClickOutsideOptions {
  exclude?: React.RefObject<HTMLElement>[];
  callback: () => void;
}

const useClickOutside = ({ exclude = [], callback }: ClickOutsideOptions) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      for (const ref of exclude) {
        if (ref.current?.contains(event.target as Node)) return;
      }
      callback();
    };
    window.addEventListener('mouseup', handleClick);

    return () => window.removeEventListener('mouseup', handleClick);
    // Deps. array is empty because if we were to pass exclude and callback,
    // the parent component would have to memoise them, which is not ideal.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useClickOutside;
