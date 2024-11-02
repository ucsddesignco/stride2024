'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap, Power2, Power3, Power4 } from 'gsap';
import { useGSAP } from '@gsap/react';
import '@/app/home.scss';
import Image from 'next/image';
// import Flashlight from '@/components/Flashlight/Flashlight';

gsap.registerPlugin(useGSAP);

export default function Page() {
  const [folderOpenned, setFolderOpenned] = useState(false);
  const [isHoveringFolder, setIsHoveringFolder] = useState(false);

  const badge = useRef<HTMLImageElement>(null);
  const feather = useRef<HTMLImageElement>(null);
  const mainContent = useRef<HTMLImageElement>(null);
  const polaroid = useRef<HTMLImageElement>(null);
  const orgs = useRef<HTMLImageElement>(null);
  const companies = useRef<HTMLImageElement>(null);
  const magnifyingGlass = useRef<HTMLImageElement>(null);
  const cards = useRef<HTMLImageElement>(null);
  const pageFolderBottom = useRef<HTMLImageElement>(null);

  const folderBadge = useRef<HTMLImageElement>(null);
  const folderFeather = useRef<HTMLImageElement>(null);
  const folderMainContent = useRef<HTMLImageElement>(null);
  const folderPolaroid = useRef<HTMLImageElement>(null);
  const folderOrgs = useRef<HTMLImageElement>(null);
  const folderCompanies = useRef<HTMLImageElement>(null);
  const folderMagnifyingGlass = useRef<HTMLImageElement>(null);
  const folderCards = useRef<HTMLImageElement>(null);
  const folderBottom = useRef<HTMLImageElement>(null);

  //   const setPageAssetPosition = (
  //     pageAssetRef: RefObject<HTMLImageElement>,
  //     folderAssetRef: RefObject<HTMLImageElement>
  //   ): void => {
  //     const folderAssetRect = folderAssetRef.current?.getBoundingClientRect();
  //     const pageAsset = pageAssetRef.current;
  //     if (folderAssetRect && pageAsset) {
  //       pageAsset.style.top = `${folderAssetRect.top}px`;
  //       pageAsset.style.left = `${folderAssetRect.left}px`;
  //     }
  //   };

  useEffect(() => {
    const setNonFolderPositions = () => {
      const folderBadgeRect = folderBadge.current?.getBoundingClientRect();
      const folderFeatherRect = folderFeather.current?.getBoundingClientRect();
      const folderMainContentRect =
        folderMainContent.current?.getBoundingClientRect();
      const folderPolaroidRect =
        folderPolaroid.current?.getBoundingClientRect();
      const folderOrgsRect = folderOrgs.current?.getBoundingClientRect();
      const folderCompaniesRect =
        folderCompanies.current?.getBoundingClientRect();
      const folderMagnifyingGlassRect =
        folderMagnifyingGlass.current?.getBoundingClientRect();
      const folderCardsRect = folderCards.current?.getBoundingClientRect();
      const folderBottomRect = folderBottom.current?.getBoundingClientRect();

      if (folderBadgeRect && badge.current) {
        badge.current.style.position = 'absolute';
        badge.current.style.top = `${folderBadgeRect.top}px`;
        badge.current.style.left = `${folderBadgeRect.left}px`;
      }
      if (folderFeatherRect && feather.current) {
        feather.current.style.position = 'absolute';
        feather.current.style.top = `${folderFeatherRect.top}px`;
        feather.current.style.left = `${folderFeatherRect.left}px`;
      }
      if (folderMainContentRect && mainContent.current) {
        mainContent.current.style.position = 'absolute';
        mainContent.current.style.top = `${folderMainContentRect.top}px`;
        mainContent.current.style.left = `${folderMainContentRect.left}px`;
      }
      if (folderPolaroidRect && polaroid.current) {
        polaroid.current.style.position = 'absolute';
        polaroid.current.style.top = `${folderPolaroidRect.top}px`;
        polaroid.current.style.left = `${folderPolaroidRect.left}px`;
      }
      if (folderOrgsRect && orgs.current) {
        orgs.current.style.position = 'absolute';
        orgs.current.style.top = `${folderOrgsRect.top}px`;
        orgs.current.style.left = `${folderOrgsRect.left}px`;
      }
      if (folderCompaniesRect && companies.current) {
        companies.current.style.position = 'absolute';
        companies.current.style.top = `${folderCompaniesRect.top}px`;
        companies.current.style.left = `${folderCompaniesRect.left}px`;
      }
      if (folderMagnifyingGlassRect && magnifyingGlass.current) {
        magnifyingGlass.current.style.position = 'absolute';
        magnifyingGlass.current.style.top = `${folderMagnifyingGlassRect.top}px`;
        magnifyingGlass.current.style.left = `${folderMagnifyingGlassRect.left}px`;
      }
      if (folderCardsRect && cards.current) {
        cards.current.style.position = 'absolute';
        cards.current.style.top = `${folderCardsRect.top}px`;
        cards.current.style.left = `${folderCardsRect.left}px`;
      }
      if (folderBottomRect && pageFolderBottom.current) {
        pageFolderBottom.current.style.position = 'absolute';
        pageFolderBottom.current.style.top = `${folderBottomRect.top}px`;
        pageFolderBottom.current.style.left = `${folderBottomRect.left}px`;
      }
    };

    setNonFolderPositions();

    // Optionally, update positions on window resize
    // window.addEventListener('resize', setNonFolderPositions);
    // return () => window.removeEventListener('resize', setNonFolderPositions);
  }, []);

  const openFolder = () => {
    setFolderOpenned(true);
    const tl = gsap.timeline();
    tl.to('#folder-flap', {
      rotateX: 160,
      duration: 0.5,
      ease: Power2.easeInOut
    }).add(() => {
      gsap.set('.folder-asset', { display: 'none' });
      gsap.set('#click-to-open-text', { visibility: 'hidden' });
      gsap.set('.page-asset', { display: 'block' });
    });
    tl.to(['#folder', '#page-folder-bottom'], {
      translateY: '105vh',
      translateX: -50,
      rotate: 10,
      duration: 1.5,
      ease: Power4.easeOut
    });
  };

  useGSAP(
    () => {
      if (folderOpenned) {
        return;
      }

      if (isHoveringFolder) {
        gsap.to('#folder-flap', {
          rotateX: '30',
          duration: 0.5,
          ease: Power3.easeOut
        });
      } else {
        gsap.to('#folder-flap', { rotateX: '0' });
      }
    },
    { dependencies: [isHoveringFolder, folderOpenned] }
  );

  return (
    <div style={{ minHeight: '100vh', height: '100vh' }}>
      {/* <Flashlight /> */}
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
          position: 'relative'
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
          id="cards"
          ref={cards}
          className="page-asset"
          src="/images/page-assets/cards.svg"
          alt=""
          width={287}
          height={223}
        />

        <Image
          id="magnifying-glass"
          ref={magnifyingGlass}
          className="page-asset"
          src="/images/page-assets/magnifying-glass.svg"
          alt=""
          width={223}
          height={471}
        />

        <Image
          id="companies"
          ref={companies}
          className="page-asset"
          src="/images/page-assets/companies.svg"
          alt=""
          width={269}
          height={222}
        />

        <Image
          id="orgs"
          ref={orgs}
          className="page-asset"
          src="/images/page-assets/orgs.svg"
          alt=""
          width={268}
          height={301}
        />

        <Image
          id="polaroid"
          ref={polaroid}
          className="page-asset"
          src="/images/page-assets/polaroid.svg"
          alt=""
          width={175}
          height={186}
        />

        <Image
          id="main-content"
          ref={mainContent}
          className="page-asset"
          src="/images/page-assets/main-content.svg"
          alt=""
          width={423}
          height={242}
        />

        <Image
          id="feather"
          ref={feather}
          className="page-asset"
          src="/images/page-assets/feather.svg"
          alt=""
          width={196}
          height={227}
        />

        <Image
          id="badge"
          ref={badge}
          className="page-asset"
          src="/images/page-assets/badge.svg"
          alt=""
          width={234}
          height={279}
        />

        <Image
          id="page-folder-bottom"
          ref={pageFolderBottom}
          className="page-asset"
          src="/images/folder/flat-folder-bottom.svg"
          alt=""
          width={754}
          height={365}
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
            id="folder-cards"
            ref={folderCards}
            className="folder-asset"
            src="/images/page-assets/cards.svg"
            alt=""
            width={287}
            height={223}
          />
          <Image
            id="folder-magnifying-glass"
            ref={folderMagnifyingGlass}
            className="folder-asset"
            src="/images/page-assets/magnifying-glass.svg"
            alt=""
            width={223}
            height={471}
          />
          <Image
            id="folder-companies"
            ref={folderCompanies}
            className="folder-asset"
            src="/images/page-assets/companies.svg"
            alt=""
            width={269}
            height={222}
          />
          <Image
            id="folder-orgs"
            ref={folderOrgs}
            className="folder-asset"
            src="/images/page-assets/orgs.svg"
            alt=""
            width={268}
            height={301}
          />
          <Image
            id="folder-polaroid"
            ref={folderPolaroid}
            className="folder-asset"
            src="/images/page-assets/polaroid.svg"
            alt=""
            width={175}
            height={186}
          />
          <Image
            id="folder-main-content"
            ref={folderMainContent}
            className="folder-asset"
            src="/images/page-assets/main-content.svg"
            alt=""
            width={423}
            height={242}
          />
          <Image
            id="folder-feather"
            ref={folderFeather}
            className="folder-asset"
            src="/images/page-assets/feather.svg"
            alt=""
            width={196}
            height={227}
          />
          <Image
            id="folder-badge"
            ref={folderBadge}
            className="folder-asset"
            src="/images/page-assets/badge.svg"
            alt=""
            width={234}
            height={279}
          />

          <Image
            id="folder-bottom"
            ref={folderBottom}
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
