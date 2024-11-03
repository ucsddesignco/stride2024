"use client";
import React from 'react';
import Flashlight from './components/flashlight/flashlight';
import Controls from './components/flashlight_controls/controls';
export default function Home() {

  return (
    <main className='flashlight'>
      <h1>Stride 2024</h1>
      {/* temp to test flashlight cursor*/}
      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <img src="/Homepage_Desktop.png" alt="stride image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <p>This is a test P</p>
      <Flashlight />
      <Controls />
    </main>
  );
}
