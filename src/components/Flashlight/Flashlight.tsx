import '@/components/Flashlight/Flashlight.scss';
import React, { useEffect } from 'react';

type FlashlightProps = {
  isOn: boolean;
  size: number;
};

export default function Flashlight({ isOn, size }: FlashlightProps) {
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
    <div
      className="flashlight"
      style={
        {
          display: isOn ? 'block' : 'none',
          '--flashlight-scale': size
          // transform: `translate(-50%, -50%) scale(${size})`,
        } as React.CSSProperties
      }
    >
      <div className="custom-cursor flashlight-ring" />
      <div className="ring-inner flashlight-ring" />
      <div className="ring-outer flashlight-ring" />
    </div>
  );
}
