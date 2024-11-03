'use client';

import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import '@/app/Home/Home.scss';
import Image from 'next/image';

gsap.registerPlugin(useGSAP);

const width = 780;
const height = 184.74;
const src = '/images/folder/flat-folder-flap-front.svg';

// Both our top half and bottom half share
// a few common styles
const sharedStyles = {
  width,
  height: height + 0,
  backgroundSize: `${width}px ${height}px`,
  backgroundImage: `url(${src})`
};

export default function Page() {
  const [isHoveringFolder, setIsHoveringFolder] = useState(false);
  const folderFlap = useRef<HTMLDivElement | null>(null);

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

  return (
    <div
      style={{
        backgroundColor: 'black',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        gap: '5rem',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Image
        src="/images/page-borders/top-left-corner.svg"
        alt=""
        width={160}
        height={280}
        style={{ position: 'absolute', top: -5, left: 0 }}
      />
      <Image
        src="/images/page-borders/bottom-right-corner.svg"
        alt=""
        width={277}
        height={274}
        style={{ position: 'absolute', bottom: 0, right: 0 }}
      />
      <Image
        src="/images/page-borders/top-edge.svg"
        alt=""
        width={330}
        height={30}
        style={{
          position: 'absolute',
          top: 0,
          right: '5%'
        }}
      />
      <Image
        src="/images/page-borders/bottom-edge.svg"
        alt=""
        width={600}
        height={41}
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '30%'
        }}
      />

      <div
        style={{ perspective: 800, height: 550 }}
        onClick={openFolder}
        onMouseEnter={() => setIsHoveringFolder(true)}
        onMouseLeave={() => setIsHoveringFolder(false)}
        id="folder"
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            openFolder();
          }
        }}
        aria-label="button"
        role="button"
        tabIndex={0}
        onFocus={() => setIsHoveringFolder(true)}
        onBlur={() => setIsHoveringFolder(false)}
      >
        <Image
          src="/images/folder/flat-folder-back.svg"
          alt=""
          style={{ position: 'absolute' }}
          width={width}
          height={550}
        />

        <Image
          src="/images/page-assets/cards.svg"
          alt=""
          style={{
            position: 'absolute',
            transform: 'rotate(8deg)',
            top: '20%',
            left: '15%'
          }}
          width={262}
          height={187}
        />

        <Image
          src="/images/page-assets/magnifying-glass.svg"
          alt=""
          style={{ position: 'absolute', left: '2%' }}
          width={306}
          height={511}
        />

        <Image
          src="/images/page-assets/companies.svg"
          alt=""
          style={{
            position: 'absolute',
            transform: 'rotate(29deg)',
            top: '55%',
            right: '12%'
          }}
          width={263}
          height={178}
        />

        <Image
          src="/images/page-assets/orgs.svg"
          alt=""
          style={{
            position: 'absolute',
            transform: 'rotate(-46deg)',
            top: '28%',
            right: '16%'
          }}
          width={258}
          height={208}
        />

        <Image
          src="/images/page-assets/polaroid.svg"
          alt=""
          style={{
            position: 'absolute',
            transform: 'rotate(-21deg)',
            top: '20%',
            right: '45%'
          }}
          width={130}
          height={150}
        />

        <Image
          src="/images/page-assets/main-content.svg"
          alt=""
          style={{
            position: 'absolute',
            transform: 'rotate(-5deg)',
            top: '60%',
            right: '32%'
          }}
          width={405}
          height={205}
        />

        <Image
          src="/images/page-assets/feather.svg"
          alt=""
          style={{
            position: 'absolute',
            right: '30%',
            top: '30%',
            transform: 'rotate(-22.5deg)'
          }}
          width={263}
          height={147}
        />

        <Image
          src="/images/page-assets/badge.svg"
          alt=""
          style={{
            position: 'absolute',
            right: '15%',
            top: '15%',
            transform: 'rotate(12deg)'
          }}
          width={193}
          height={260}
        />

        <Image
          src="/images/folder/flat-folder-bottom.svg"
          alt=""
          style={{
            position: 'absolute',
            top: '95px'
          }}
          width={width}
          height={550}
        />

        <div
          ref={folderFlap}
          style={{
            ...sharedStyles, // Apply the folding rotation:
            transformOrigin: 'center top',

            // This optional prop can improve
            // performance, by letting the
            // browser optimize it:
            willChange: 'transform',
            transformStyle: 'preserve-3d'
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `url('/images/folder/flat-folder-flap-back.svg')`,
              backgroundRepeat: 'no-repeat',
              width,
              backgroundSize: `${width}px ${height}px`,
              backfaceVisibility: 'hidden',
              transform: 'rotateX(180deg)'
            }}
          />
        </div>
      </div>
      <div>
        <h1 style={{ color: 'white', fontSize: '3rem', textAlign: 'center' }}>
          click to open!
        </h1>
      </div>
    </div>
  );
}
