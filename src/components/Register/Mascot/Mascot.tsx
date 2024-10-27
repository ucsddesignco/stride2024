'use client';

import { useEffect, useState } from 'react';
import './Mascot.scss';
import { COLOR_THEMES } from '../constants';
import { MascotBreeds, MascotHats } from '../types';
import TestHat from './Hats/TestHat';

type MascotColors = {
  type?: string;
  head: string;
  arm: string;
  body: string;
};

const loadColorFromStorage = () => {
  const storedBreed = localStorage.getItem('mascot-color');

  return storedBreed
    ? COLOR_THEMES[storedBreed as MascotBreeds]
    : COLOR_THEMES.default;
};

const loadHatFromStorage = () => {
  const storedHat = localStorage.getItem('mascot-hat') as MascotHats;
  return storedHat || '';
};

export default function Mascot() {
  const [colors, setColors] = useState<MascotColors>(COLOR_THEMES.default);
  const [hat, setHat] = useState<MascotHats>('');
  const [isMounted, setIsMounted] = useState(false);

  const loadAllColors = () => {
    setColors(loadColorFromStorage());
  };

  const loadHat = () => {
    setHat(loadHatFromStorage());
  };

  useEffect(() => {
    loadAllColors();
    loadHat();
    setIsMounted(true);

    window.addEventListener('mascot-color', loadAllColors);
    window.addEventListener('mascot-hat', loadHat);

    return () => {
      window.removeEventListener('mascot-color', loadAllColors);
      window.removeEventListener('mascot-hat', loadHat);
    };
  }, []);

  return (
    <div className="mascot-container">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 173 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Detective Ducky"
        style={{ opacity: isMounted ? 1 : 0 }}
        aria-hidden={!isMounted}
      >
        <g fill={colors.body}>
          <ellipse cx="80.5" cy="61.5" rx="64.5" ry="33.5" />
          <path d="M155.816 16.1163L144.427 61.6983L115.785 40.7122L155.816 16.1163Z" />
          <path d="M99 29.5C119 33.5 145.333 22.5 156 16.5L142 34.5L128 51.5L100.5 45.5L99 29.5Z" />
          <path d="M145 64L155.5 16.5L133 47L145 64Z" />
        </g>
        <circle cx="30" cy="24" r="24" fill={colors.head} />
        <circle cx="25.5" cy="25.5" r="2.5" fill="black" />
        <ellipse cx="8.5" cy="28.5" rx="8.5" ry="4.5" fill="#F4AF49" />
        <ellipse
          cx="87.4831"
          cy="61.0804"
          rx="30.7898"
          ry="15.737"
          transform="rotate(12.6125 87.4831 61.0804)"
          fill={colors.arm}
        />
        <g transform="translate(4, -20)" className="mascot-hat">
          {hat === 'test' && <TestHat mask />}
        </g>
      </svg>
    </div>
  );
}
