import React, { useEffect } from 'react';
import './flashlight.scss';
import Cursor from 'public/Cursor.svg';

const Flashlight: React.FC = function Flashlight() {
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
    <>
      <div className="custom-cursor" />
      <div className="ring-inner" />
      <div className="ring-outer" />
    </>
  );
};

export default Flashlight;
