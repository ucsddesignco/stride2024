import React from "react";
import { useEffect } from 'react';
import './flashlight.scss';
import Cursor from 'public/Cursor.svg';

const Flashlight: React.FC = () => {
    useEffect(() => {

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
        <>
            <div className="custom-cursor"></div>
            <div className="ring-inner"></div>
            <div className="ring-outer"></div>
        </>
    );
};

export default Flashlight;