import React from 'react';
import './controls.scss';

function Controls() {
  return (
    <div className="controls">
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="size-icon">
            <path
              id="Vector 2001"
              d="M22 9.99817L14 9.99817M22 9.99817V17.9982M22 9.99817L13.998 18.0001"
              stroke="black"
              stroke-width="2"
              stroke-linecap="square"
            />
            <path
              id="Ellipse 34"
              d="M14.222 27.7026C15.1171 27.8975 16.0466 28.0001 17 28.0001C24.1797 28.0001 30 22.1798 30 15.0001C30 7.82042 24.1797 2.00012 17 2.00012C9.8203 2.00012 4 7.82042 4 15.0001C4 15.9495 4.10177 16.8752 4.295 17.7667"
              stroke="black"
              stroke-width="2"
            />
            <circle
              id="Ellipse 35"
              cx="9"
              cy="23.0001"
              r="7"
              stroke="black"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Controls;
