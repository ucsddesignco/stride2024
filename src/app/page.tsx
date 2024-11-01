'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import '@/app/home.scss';
import Image from 'next/image';
import Flashlight from '@/components/Flashlight/Flashlight';

gsap.registerPlugin(useGSAP);

export default function Page() {
  const [isHoveringFolder, setIsHoveringFolder] = useState(false);

  useEffect(() => {}, []);

  const openFolder = () => {
    const tl = gsap.timeline();
    tl.to('#folder-flap', { rotateX: 120 });
    tl.to('#click-to-open-text', { display: 'none', duration: 0 });
    tl.to('#folder', {
      translateY: 700,
      translateX: -50,
      rotate: 10,
      duration: 1
    });
    tl.to(
      '.folder-asset',
      {
        scale: 1.2
      },
      '<'
    );
    tl.to(
      '#badge',
      {
        right: 0,
        top: '60%',
        rotate: 0,
        duration: 1
      },
      '<'
    );
    tl.to(
      '#feather',
      {
        left: '45%',
        top: '0%',
        rotate: -15,
        duration: 1
      },
      '<'
    );
    tl.to(
      '#polaroid',
      {
        left: '40%',
        top: '-5%',
        duration: 1
      },
      '<'
    );
    tl.to(
      '#orgs',
      {
        left: '0%',
        top: '68%',
        rotate: 0,
        duration: 1
      },
      '<'
    );
    tl.to(
      '#companies',
      {
        right: '0%',
        top: '20%',
        rotate: 0,
        duration: 1
      },
      '<'
    );
    tl.to(
      '#cards',
      {
        left: '5%',
        top: '25%',
        rotate: 8,
        duration: 1
      },
      '<'
    );
    tl.to(
      '#magnifying-glass',
      {
        left: '-2%',
        top: '15%',
        rotate: 53,
        duration: 1
      },
      '<'
    );
    tl.to(
      '#main-content',
      {
        top: '50%',
        duration: 1
      },
      '<'
    );
  };

  useGSAP(
    () => {
      if (isHoveringFolder) {
        gsap.to('#folder-flap', { rotateX: '30' });
      } else {
        gsap.to('#folder-flap', { rotateX: '0' });
      }
    },
    { dependencies: [isHoveringFolder] }
  );

  return (
    <div style={{ minHeight: '100vh', height: '100vh' }}>
      <Flashlight />
      <div
        style={{
          backgroundColor: 'black',
          display: 'grid',
          justifyContent: 'center',
          justifyItems: 'center',
          alignContent: 'center',
          gap: '3rem',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          perspective: 4000
        }}
      >
        <Image
          id="paper-border-top-left"
          src="/images/page-borders/top-left-corner.svg"
          alt=""
          width={160}
          height={281}
        />
        <Image
          id="paper-border-bottom-right"
          src="/images/page-borders/bottom-right-corner.svg"
          alt=""
          width={277}
          height={276}
        />
        <Image
          id="paper-border-top-edge"
          src="/images/page-borders/top-edge.svg"
          alt=""
          width={331}
          height={29}
        />
        <Image
          id="paper-border-bottom-edge"
          src="/images/page-borders/bottom-edge.svg"
          alt=""
          width={602}
          height={42}
        />

        <Image
          src="/images/page-assets/cards.svg"
          className="folder-asset"
          alt=""
          id="cards"
          width={263}
          height={188}
        />

        <Image
          src="/images/page-assets/magnifying-glass.svg"
          alt=""
          id="magnifying-glass"
          className="folder-asset"
          width={307}
          height={513}
        />

        <Image
          id="companies"
          className="folder-asset"
          src="/images/page-assets/companies.svg"
          alt=""
          width={264}
          height={179}
        />

        <Image
          id="orgs"
          className="folder-asset"
          src="/images/page-assets/orgs.svg"
          alt=""
          width={259}
          height={208}
        />

        <Image
          id="polaroid"
          className="folder-asset"
          src="/images/page-assets/polaroid.svg"
          alt=""
          width={132}
          height={150}
        />

        <Image
          id="main-content"
          className="folder-asset"
          src="/images/page-assets/main-content.svg"
          alt=""
          width={406}
          height={208}
        />

        <Image
          id="feather"
          className="folder-asset"
          src="/images/page-assets/feather.svg"
          alt=""
          width={266}
          height={150}
        />

        <Image
          id="badge"
          className="folder-asset"
          src="/images/page-assets/badge.svg"
          alt=""
          width={194}
          height={260}
        />

        <div
          id="folder"
          onMouseEnter={() => setIsHoveringFolder(true)}
          onMouseLeave={() => setIsHoveringFolder(false)}
          onClick={openFolder}
          role="button"
          tabIndex={0}
          onFocus={() => setIsHoveringFolder(true)}
          onBlur={() => setIsHoveringFolder(false)}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              openFolder();
            }
          }}
        >
          <Image
            id="folder-back"
            src="/images/folder/flat-folder-back.svg"
            alt=""
            width={754}
            height={535}
          />
          <Image
            id="folder-bottom"
            src="/images/folder/flat-folder-bottom.svg"
            alt=""
            width={754}
            height={365}
          />
          <div id="folder-flap">
            <div />
          </div>
        </div>
        <h1 id="click-to-open-text">Click/Tap To Open</h1>
      </div>
    </div>
  );
}
