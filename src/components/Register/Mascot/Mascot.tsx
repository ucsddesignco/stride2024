'use client';

import { useEffect, useState } from 'react';
import './Mascot.scss';
import { COLOR_THEMES } from '../constants';
import {
  MascotAccessories,
  MascotBreeds,
  MascotHats,
  MascotUserData
} from '../types';
import { MASCOT_HATS } from '../MascotHats/constants';
import { MASCOT_ACCESSORIES } from './MascotAccessories/constants';

type MascotColors = {
  type?: string;
  color: string;
  shadow: string;
};

const loadColorFromStorage = () => {
  const storedBreed = localStorage.getItem('mascot-color');
  const availableColors = [
    'default',
    'yellow',
    'lilac',
    'blue',
    'brown',
    'pink'
  ];

  if (storedBreed && !availableColors.includes(storedBreed)) {
    localStorage.removeItem('mascot-color');
    return COLOR_THEMES.default;
  }

  return storedBreed
    ? COLOR_THEMES[storedBreed as MascotBreeds]
    : COLOR_THEMES.default;
};

const loadHatFromStorage = () => {
  const storedHat = localStorage.getItem('mascot-hat') as MascotHats;

  const availableHats = ['bowler', 'beret', 'hawk', 'ivan', 'nerve', 'tophat'];

  if (storedHat && !availableHats.includes(storedHat)) {
    localStorage.removeItem('mascot-hat');
    return 'bowler';
  }
  return storedHat || 'bowler';
};

const loadAccessoryFromStorage = () => {
  const storedAccessory = localStorage.getItem(
    'mascot-accessory'
  ) as MascotAccessories;

  const availableAccessories = [
    'glasses',
    'bowtie',
    'monocle',
    'mustache',
    'suit',
    'default'
  ];

  if (storedAccessory && !availableAccessories.includes(storedAccessory)) {
    localStorage.removeItem('mascot-accessory');
    return 'default';
  }
  return storedAccessory || 'default';
};

export default function Mascot({
  mascotData
}: {
  mascotData?: MascotUserData;
}) {
  const [colors, setColors] = useState<MascotColors>(COLOR_THEMES.default);
  const [hat, setHat] = useState<MascotHats>(
    MASCOT_HATS.bowler.name as MascotHats
  );
  const [accessory, setAccessory] = useState<MascotAccessories>('default');
  const [isMounted, setIsMounted] = useState(false);

  const loadAllColors = () => {
    setColors(loadColorFromStorage());
  };

  const loadHat = () => {
    setHat(loadHatFromStorage());
  };

  const loadAccessory = () => {
    setAccessory(loadAccessoryFromStorage());
  };

  useEffect(() => {
    loadAllColors();
    loadHat();
    loadAccessory();
    setIsMounted(true);

    window.addEventListener('mascot-color', loadAllColors);
    window.addEventListener('mascot-hat', loadHat);
    window.addEventListener('mascot-accessory', loadAccessory);

    return () => {
      window.removeEventListener('mascot-color', loadAllColors);
      window.removeEventListener('mascot-hat', loadHat);
      window.removeEventListener('mascot-accessory', loadAccessory);
    };
  }, []);

  return (
    <div className="mascot-container">
      <div
        id={`mascot-accessory-${mascotData?.accessory || accessory}`}
        className="mascot-accessory"
      >
        {MASCOT_ACCESSORIES[mascotData?.accessory || accessory]?.component}
      </div>
      <div id={`mascot-hat-${mascotData?.hat || hat}`} className="mascot-hat">
        {MASCOT_HATS[mascotData?.hat || hat]?.component}
      </div>

      <svg
        width="100%"
        viewBox="0 0 152 261"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`Detective Ducky wearing a ${mascotData?.hat || hat} hat and a ${mascotData?.accessory || accessory} accessory`}
        style={{ opacity: isMounted || mascotData ? 1 : 0 }}
      >
        <path
          d="M142.432 257.303C142.432 257.303 111.944 254.633 111.944 241.765V200.594H95.4856V212.617L93.1683 211.89L76.196 221.954C93.3344 221.954 95.3116 225.358 95.4935 226.504V244.427C95.28 248.867 93.8722 257.358 86.1295 257.303C85.2912 257.303 84.6189 257.982 84.6189 258.812C84.6189 259.641 85.2991 260.321 86.1295 260.321H142.44C143.279 260.321 143.951 259.641 143.951 258.812C143.951 257.982 143.271 257.303 142.44 257.303H142.432Z"
          fill="#F9A825"
        />
        <path
          d="M65.8692 257.303C58.1256 257.358 56.7176 248.867 56.5041 244.427V226.504C56.686 225.35 58.6555 221.954 75.8038 221.954L58.8295 211.89L56.512 212.617V200.594H40.0518V241.765C40.0518 254.633 9.55983 257.303 9.55983 257.303C8.7214 257.303 8.04907 257.982 8.04907 258.812C8.04907 259.641 8.72931 260.321 9.55983 260.321H65.8771C66.7155 260.321 67.3879 259.641 67.3879 258.812C67.3879 257.982 66.7076 257.303 65.8771 257.303H65.8692Z"
          fill="#F9A825"
        />
        <path
          d="M75.7445 221.954L58.7864 211.89L56.4711 212.617V200.594H50.4813V245.667C50.4813 245.667 51.1055 255.589 33.8867 260.321H65.8273C66.6649 260.321 67.3366 259.641 67.3366 258.812C67.3366 257.982 66.657 257.303 65.8273 257.303C58.0911 257.358 56.6845 248.867 56.4711 244.427V226.504C56.6529 225.35 58.6205 221.954 75.7524 221.954H75.7445Z"
          fill="#F57F17"
        />
        <path
          d="M142.35 257.303C142.35 257.303 111.913 254.633 111.913 241.765V200.594H103.978V244.474C103.978 244.474 103.425 254.285 116.706 260.321H142.35C143.187 260.321 143.858 259.641 143.858 258.812C143.858 257.982 143.179 257.303 142.35 257.303Z"
          fill="#F57F17"
        />
        <path
          d="M119.538 127.291C112.594 117.24 108.308 103.586 108.308 88.5249C108.308 75.577 111.466 63.6636 116.76 54.1895H35.3255C40.54 63.6231 43.6425 75.4447 43.6425 88.2799C43.6425 104.163 38.8817 118.473 31.2582 128.651C29.8822 130.105 28.5931 131.63 27.3832 133.21C27.2013 133.392 27.0352 133.589 26.8533 133.771V133.913C20.0839 143.064 16.0981 154.189 16.0981 166.192C16.0981 197.405 42.9465 222.707 76.0582 222.707C109.17 222.707 136.018 197.405 136.018 166.192C136.018 151.116 129.739 137.422 119.53 127.291H119.538Z"
          fill="#1F1F1F"
        />
        <path
          d="M108.258 88.5169C108.258 103.578 112.544 117.232 119.488 127.284L91.5693 127.528L91.5694 45.5566H122.684C113.87 55.8124 108.25 71.2441 108.25 88.5169H108.258Z"
          fill="#141414"
        />
        <path
          d="M115.578 120.785L99.1113 123.741C99.4354 124.271 99.7595 124.8 100.092 125.314C100.621 126.128 101.254 126.863 101.926 127.559C111.531 137.581 117.389 150.86 117.389 165.435C117.389 194.568 94.0201 218.541 64.0029 221.624C67.8766 222.367 71.8847 222.754 75.9956 222.754C109.104 222.754 135.935 197.445 135.935 166.225C135.935 151.144 129.658 137.447 119.452 127.314C118.045 125.283 116.756 123.093 115.586 120.785H115.578Z"
          fill="#030303"
        />
        <path
          d="M76 222.289C117.974 222.289 152 197.141 152 166.12C152 135.099 117.974 109.951 76 109.951C34.0264 109.951 0 135.099 0 166.12C0 197.141 34.0264 222.289 76 222.289Z"
          fill="#1F1F1F"
        />
        <path
          d="M76 222.335C118.006 222.335 152.058 197.176 152.058 166.142C152.058 141.675 130.892 120.86 101.35 113.146L76 115.158V222.335Z"
          fill="#141414"
        />
        <path
          d="M75.512 109.334C77.4098 110.874 79.4026 112.106 79.8691 114.42C80.3594 117.404 76.3186 122.411 73.4006 124.937C69.0119 128.775 64.6864 127.559 58.7556 126.572L31.1315 119.672C27.8629 118.856 26.147 115.269 27.565 112.217L36.5524 92.8743C37.8748 90.0282 41.347 88.9188 44.0703 90.4839C53.1174 95.6833 71.496 106.333 75.512 109.334Z"
          fill="#030303"
        />
        <path
          d="M76.488 109.334C74.5902 110.874 72.5974 112.106 72.1309 114.42C71.6406 117.404 75.6814 122.411 78.5994 124.937C82.9881 128.775 87.3136 127.559 93.2444 126.572L120.868 119.672C124.137 118.856 125.853 115.269 124.435 112.217L115.448 92.8743C114.125 90.0282 110.653 88.9188 107.93 90.4839C98.8826 95.6833 80.504 106.333 76.488 109.334Z"
          fill="#030303"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M152 166.106C152 197.128 117.974 222.275 76 222.275C34.0264 222.275 0 197.128 0 166.106C0 135.085 34.0264 109.938 76 109.938C117.974 109.938 152 135.085 152 166.106ZM141.736 163.438C141.736 190.271 112.306 212.024 76.0017 212.024C39.6975 212.024 10.2672 190.271 10.2672 163.438C10.2672 136.604 39.6975 114.852 76.0017 114.852C112.306 114.852 141.736 136.604 141.736 163.438Z"
          fill="#030303"
        />
        <path
          d="M75.9723 80.9953C103.16 80.9953 125.2 63.0812 125.2 40.983C125.2 18.8848 103.16 0.970703 75.9723 0.970703C48.7845 0.970703 26.7444 18.8848 26.7444 40.983C26.7444 63.0812 48.7845 80.9953 75.9723 80.9953Z"
          fill={mascotData?.color?.color || colors.color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M125.2 40.983C125.2 63.0812 103.16 80.9953 75.9723 80.9953C48.7845 80.9953 26.7444 63.0812 26.7444 40.983C26.7444 18.8848 48.7845 0.970703 75.9723 0.970703C103.16 0.970703 125.2 18.8848 125.2 40.983ZM114.67 39.1402C114.67 57.695 95.8676 72.7365 72.6742 72.7365C49.4808 72.7365 30.6788 57.695 30.6788 39.1402C30.6788 20.5855 49.4808 5.5439 72.6742 5.5439C95.8676 5.5439 114.67 20.5855 114.67 39.1402Z"
          fill={mascotData?.color?.shadow || colors.shadow}
        />
        <path
          d="M47.2192 41.7447C48.2921 39.086 47.5395 36.2758 45.5381 35.4679C43.5368 34.66 41.0446 36.1603 39.9717 38.8189C38.8988 41.4776 39.6515 44.2878 41.6528 45.0957C43.6542 45.9036 46.1463 44.4033 47.2192 41.7447Z"
          fill="black"
        />
        <path
          d="M45.6101 40.331C46.421 40.2916 47.0416 39.3829 46.9965 38.3015C46.9513 37.2201 46.2574 36.3754 45.4466 36.4149C44.6358 36.4543 44.0151 37.363 44.0603 38.4444C44.1054 39.5258 44.7993 40.3705 45.6101 40.331Z"
          fill="#FBFEFC"
        />
        <path
          d="M110.318 45.1344C112.317 44.3197 113.075 41.5011 112.011 38.8388C110.947 36.1766 108.464 34.6788 106.465 35.4936C104.467 36.3083 103.709 39.1269 104.773 41.7892C105.837 44.4514 108.32 45.9491 110.318 45.1344Z"
          fill="black"
        />
        <path
          d="M110.487 40.4208C111.239 40.1144 111.523 39.0512 111.121 38.0461C110.719 37.041 109.784 36.4747 109.032 36.7811C108.281 37.0875 107.997 38.1507 108.399 39.1558C108.8 40.1609 109.735 40.7272 110.487 40.4208Z"
          fill="#FBFEFC"
        />
        <path
          d="M104.231 56.9827C94.2331 53.6251 90.3895 47.527 89.3624 45.5157C87.1236 40.2349 82.0202 36.5488 76.0662 36.5488C70.1122 36.5488 65.4502 39.9384 63.075 44.8666V44.8506C63.075 44.8506 59.9455 52.976 47.7648 57.0227C43.199 58.5933 40.4788 60.5486 40.4788 62.6721C40.4788 67.8166 56.4069 74.5777 76.0582 74.5777C95.7095 74.5777 111.638 67.8166 111.638 62.6721C111.638 60.5325 108.869 58.5533 104.231 56.9827Z"
          fill="#F9A825"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.034 61.0254C40.6692 61.5597 40.4788 62.1099 40.4788 62.6718C40.4788 67.8163 56.4069 74.5774 76.0582 74.5774C95.7095 74.5774 111.638 67.8163 111.638 62.6718C111.638 62.1246 111.457 61.5878 111.109 61.0657C107.916 65.5236 93.4506 70.4323 76.086 70.4323C58.669 70.4323 44.1685 65.494 41.034 61.0254Z"
          fill="#F57F17"
        />
        <path
          d="M107.671 58.3925C106.695 57.9002 105.569 57.4277 104.288 56.9927C94.2989 53.6286 90.4279 47.5523 89.4017 45.5371C87.1649 40.246 82.0659 36.5527 76.117 36.5527C73.3736 36.5527 70.9809 37.1821 68.884 38.4447C70.8189 37.5367 72.9459 38.1022 74.5193 38.8899C76.8768 40.07 77.8707 42.5722 79.0908 45.6438C82.5927 54.4601 95.1837 68.0734 107.671 58.3925Z"
          fill="#F57F17"
        />
        <circle cx="75.9416" cy="197.092" r="5.83269" fill="#030303" />
        <circle cx="75.9416" cy="177.96" r="5.83269" fill="#030303" />
        <circle cx="75.9416" cy="158.829" r="5.83269" fill="#030303" />
        <circle cx="75.9416" cy="139.698" r="5.83269" fill="#030303" />
      </svg>
    </div>
  );
}
