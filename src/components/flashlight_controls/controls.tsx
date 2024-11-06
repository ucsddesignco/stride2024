import React, { Dispatch, SetStateAction } from 'react';
import './controls.scss';
import {
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  Switch
} from 'react-aria-components';
import IconLightOn from '../Icons/icon-light-on';
import IconLightOff from '../Icons/icon-light-off';

type ControlsProps = {
  isOn: boolean;
  setIsOn: Dispatch<SetStateAction<boolean>>;
  setSize: Dispatch<SetStateAction<number>>;
};

function Controls({ isOn, setIsOn, setSize }: ControlsProps) {
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
              strokeWidth="2"
              strokeLinecap="square"
            />
            <path
              id="Ellipse 34"
              d="M14.222 27.7026C15.1171 27.8975 16.0466 28.0001 17 28.0001C24.1797 28.0001 30 22.1798 30 15.0001C30 7.82042 24.1797 2.00012 17 2.00012C9.8203 2.00012 4 7.82042 4 15.0001C4 15.9495 4.10177 16.8752 4.295 17.7667"
              stroke="black"
              strokeWidth="2"
            />
            <circle
              id="Ellipse 35"
              cx="9"
              cy="23.0001"
              r="7"
              stroke="black"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
      <p className="label">Size</p>
      <Slider
        id="slider"
        defaultValue={1}
        minValue={0.95}
        maxValue={1.3}
        step={0.01}
        onChange={value => setSize(value)}
      >
        <label
          htmlFor="slider"
          className="slider-label"
          style={{ display: 'none' }}
        >
          Adjust Size
        </label>
        <SliderTrack className="slider-track">
          <SliderThumb className="slider-thumb" />
        </SliderTrack>
        <SliderOutput className="slider-output" />
      </Slider>
      <Switch
        id="switch"
        className="switch"
        isSelected={!isOn}
        onChange={value => setIsOn(!value)}
      >
        {({ isSelected }) => (
          <div className={`switch-background ${isSelected ? 'selected' : ''}`}>
            <p className={`Off-Text ${isSelected ? 'selected' : ''}`}>Off</p>
            <div className={`switch-thumb ${isSelected ? 'selected' : ''}`}>
              <div
                className={`icon-light ${isSelected ? 'icon-light-off' : 'icon-light-on'}`}
              >
                {isSelected ? <IconLightOff /> : <IconLightOn />}
              </div>
            </div>
            <div className="icon-off" />
            <p className={`On-Text ${isSelected ? 'selected' : ''}`}>On</p>
          </div>
        )}
      </Switch>
    </div>
  );
}

export default Controls;
