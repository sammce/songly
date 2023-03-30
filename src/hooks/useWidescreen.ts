import { useState, useEffect } from 'react';

const useWidescreen = (threshold: number = 768) => {
  const [useWidescreen, setUseWidescreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setUseWidescreen(width >= threshold);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [threshold]);

  return useWidescreen;
};

export default useWidescreen;
