"use client";
import { useEffect } from 'react';
import React from 'react';
import './styles/flashlight.scss';

export default function Home() {
  useEffect(() => {
    const flashlight = document.querySelector('.custom-cursor');

    const moveCursor = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <main className='flashlight'>
      <h1>Stride 2024</h1>
      {/* temp to test flashlight cursor*/}
      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <img src="/Stridebackground.png" alt="stride image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="custom-cursor"></div>
    </main>
  );
}
