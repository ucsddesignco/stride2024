'use client';

import React, { ReactNode, useRef, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './styles/styles.scss';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function Home() {
  const [isHoveringFolder, setIsHoveringFolder] = useState(false);
  const folderFlap = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsActive(false);
  };

  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  const openFolder = () => {
    gsap.to(folderFlap.current, { rotateX: '180' });
  };

  useGSAP(
    () => {
      if (isHoveringFolder) {
        gsap.to(folderFlap.current, { rotateX: '20' });
      } else {
        gsap.to(folderFlap.current, { rotateX: '0' });
      }
    },
    { dependencies: [isHoveringFolder] }
  );

  return <div />;
}
