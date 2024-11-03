import '@/components/Flashlight/Flashlight.scss';
import { useEffect } from 'react';

export default function Flashlight() {
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        '--cursor-x',
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        '--cursor-y',
        `${e.clientY}px`
      );
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="flashlight">
      <div className="custom-cursor" />
      <div className="ring-inner" />
      <div className="ring-outer" />
    </div>
  );
}
