'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap, Power1, Power2, Power3, Power4 } from 'gsap';
import { useGSAP } from '@gsap/react';
import '@/app/Home.scss';
import Image from 'next/image';
import Flashlight from '@/components/Flashlight/Flashlight';
import Controls from '@/components/FlashlightControls/Controls';

gsap.registerPlugin(useGSAP);

export default function Page() {
  const [isOn, setIsOn] = useState(false);
  const [size, setSize] = useState(1);

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

  useEffect(() => {
    if (folderOpenned) {
      setIsOn(true);
      console.log('Folder opened', isOn);
    }
  }, [folderOpenned]);

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
        badge.current.style.right = `calc(100vw - ${folderBadgeRect.right}px)`;
      }
      if (folderFeatherRect && feather.current) {
        feather.current.style.position = 'absolute';
        feather.current.style.top = `${folderFeatherRect.top}px`;
        feather.current.style.right = `calc(100vw - ${folderFeatherRect.right}px)`;
      }
      if (folderMainContentRect && mainContent.current) {
        mainContent.current.style.position = 'absolute';
        mainContent.current.style.top = `${folderMainContentRect.top}px`;
        mainContent.current.style.right = `calc(100vw - ${folderMainContentRect.right}px)`;
      }
      if (folderPolaroidRect && polaroid.current) {
        polaroid.current.style.position = 'absolute';
        polaroid.current.style.top = `${folderPolaroidRect.top}px`;
        polaroid.current.style.right = `calc(100vw - ${folderPolaroidRect.right}px)`;
      }
      if (folderOrgsRect && orgs.current) {
        orgs.current.style.position = 'absolute';
        orgs.current.style.top = `${folderOrgsRect.top}px`;
        orgs.current.style.left = `${folderOrgsRect.left}px`;
      }
      if (folderCompaniesRect && companies.current) {
        companies.current.style.position = 'absolute';
        companies.current.style.top = `${folderCompaniesRect.top}px`;
        companies.current.style.right = `calc(100vw - ${folderCompaniesRect.right}px)`;
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

  const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1100) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openFolderMobile = () => {
    setFolderOpenned(true);
    const tl = gsap.timeline();
    const pageElementSpreadDuration = 1;
    const pageElementSpreadEase = Power2.easeIn;
    const assetScale = 2.5 / 3;
    /* folder openning animation and swaping folder elements for page elements */
    tl.to('#folder-flap', {
      rotateX: 160,
      duration: 0.5,
      ease: Power2.easeInOut
    }).add(() => {
      gsap.set('.folder-asset', { display: 'none' });
      gsap.set('#click-to-open-text', { visibility: 'hidden' });
      gsap.set('.page-asset', { display: 'block' });
    });
    /* page elements rise up out of folder */
    tl.to('.page-asset:not(#page-folder-bottom)', {
      translateY: '-5vh',
      duration: 1,
      ease: Power1.easeInOut
    });
    tl.to('#page-container', {
      height: '400vw',
      duration: 1.5
    });
    tl.to(
      ['#folder', '#page-folder-bottom'],
      {
        y: '450vw',
        translateX: -50,
        rotate: 10,
        duration: 2,
        ease: Power3.easeInOut
      },
      '<' // folder drop animation starts at same time as elements rise starts
    );
    tl.to(
      '.page-asset:not(#page-folder-bottom)',
      {
        translateY: '0', // revert "up" added to page elements by prev animation
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<0.5' // page elements all animate 0.5s after folder drop animation starts
    );
    tl.to(
      '#main-content',
      {
        top: '50vw',
        right: '0',
        scale: 1,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#magnifying-glass',
      {
        top: '105vw',
        left: '55%',
        rotate: 54,
        scale: assetScale,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<+=0.5'
    );
    tl.to(
      '#cards',
      {
        top: '120vw',
        left: '10%',
        scale: assetScale,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#companies',
      {
        top: '160vw',
        right: '20%',
        rotate: -30,
        scale: 2.6 / 3,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#feather',
      {
        top: '240vw',
        left: '30%',
        rotate: 10,
        scale: 2.6 / 3,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#polaroid',
      {
        top: '240vw',
        left: '-10%',
        scale: 2.7 / 3,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#badge',
      {
        top: '260vw',
        right: '-20%',
        rotate: -11,
        scale: 1,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#orgs',
      {
        top: '320vw',
        left: '20%',
        rotate: 42,
        scale: assetScale,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
  };

  const openFolderDesktop = () => {
    setFolderOpenned(true);
    const tl = gsap.timeline();
    const pageElementSpreadDuration = 1;
    const pageElementSpreadEase = Power2.easeIn;
    /* folder openning animation and swaping folder elements for page elements */
    tl.to('#folder-flap', {
      rotateX: 160,
      duration: 0.5,
      ease: Power2.easeInOut
    }).add(() => {
      gsap.set('.folder-asset', { display: 'none' });
      gsap.set('#click-to-open-text', { visibility: 'hidden' });
      gsap.set('.page-asset', { display: 'block' });
    });
    /* page elements rise up out of folder */
    tl.to('.page-asset:not(#page-folder-bottom)', {
      translateY: '-5vh',
      duration: 1,
      ease: Power1.easeInOut
    });
    /* folder falling animation */
    tl.to(
      ['#folder', '#page-folder-bottom'],
      {
        translateY: '105vh',
        translateX: -50,
        rotate: 10,
        duration: 1.5,
        ease: Power4.easeInOut
      },
      '<' // folder drop animation starts at same time as elements rise starts
    );
    /* page elements spreading out animation */
    tl.to(
      '.page-asset:not(#page-folder-bottom)',
      {
        translateY: '0', // revert "up" added to page elements by prev animation
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<0.5' // page elements all animate 0.5s after folder drop animation starts
    );
    tl.to(
      '#badge',
      {
        top: '60%',
        right: '-3%',
        rotate: -11,
        scale: 1.67,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#feather',
      {
        top: 0,
        right: '40%',
        rotate: 10,
        scale: 1.67,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#main-content',
      {
        top: '52%',
        right: '50%',
        translateX: '50%',
        scale: 1.67,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#polaroid',
      {
        top: 0,
        right: '55%',
        scale: 1.67,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#orgs',
      {
        top: '70%',
        left: '1%',
        rotate: 42,
        scale: 1.67,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#companies',
      {
        top: '23%',
        right: '3%',
        rotate: -30,
        scale: 1.67,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#magnifying-glass',
      {
        top: '31%',
        left: '0%',
        rotate: 54,
        scale: 1.67,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
    tl.to(
      '#cards',
      {
        top: '32%',
        left: '7%',
        scale: 1.67,
        duration: pageElementSpreadDuration,
        ease: pageElementSpreadEase
      },
      '<'
    );
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
    <div
      style={{ minHeight: '100vh', height: '100vh', scrollbarGutter: 'stable' }}
    >
      <Flashlight isOn={isOn} size={size} />
      {folderOpenned && (
        <Controls isOn={isOn} setIsOn={setIsOn} setSize={setSize} />
      )}

      <div
        id="page-container"
        style={{
          height: '100vh',
          overflow: 'hidden',
          background: 'transparent'
        }}
      >
        <Image
          id="paper-border-top-left"
          className="paper-border"
          src="/images/page-borders/top-left-corner.svg"
          alt=""
          width={160}
          height={281}
        />
        <Image
          id="paper-border-bottom-right"
          className="paper-border"
          src="/images/page-borders/bottom-right-corner.svg"
          alt=""
          width={277}
          height={276}
        />
        <Image
          id="paper-border-top-edge"
          className="paper-border"
          src="/images/page-borders/top-edge.svg"
          alt=""
          width={331}
          height={29}
        />
        <Image
          id="paper-border-bottom-edge"
          className="paper-border"
          src="/images/page-borders/bottom-edge.svg"
          alt=""
          width={602}
          height={42}
        />

        {/* page animation assets */}
        <Image
          id="cards"
          ref={cards}
          className="page-asset"
          src="/images/page-assets/cards.svg"
          alt=""
          width={271}
          height={192}
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
          width={265}
          height={256}
        />

        <Image
          id="orgs"
          ref={orgs}
          className="page-asset"
          src="/images/page-assets/orgs.svg"
          alt=""
          width={245}
          height={240}
        />

        <Image
          id="polaroid"
          ref={polaroid}
          className="page-asset"
          src="/images/page-assets/polaroid.svg"
          alt=""
          width={176}
          height={187}
        />

        <Image
          id="main-content"
          ref={mainContent}
          className="page-asset"
          src="/images/page-assets/main-content.svg"
          alt=""
          width={430}
          height={229}
        />

        <Image
          id="feather"
          ref={feather}
          className="page-asset"
          src="/images/page-assets/feather.svg"
          alt=""
          width={202}
          height={229}
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
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%)',
            display: 'grid',
            height: '100vh',
            alignContent: 'center',
            alignSelf: 'start',
            gap: '3rem',
            marginTop: 'calc(var(--nav-height)/2)'
          }}
        >
          <div
            id="folder"
            aria-label="Folder"
            onMouseEnter={() => setIsHoveringFolder(true)}
            onMouseLeave={() => setIsHoveringFolder(false)}
            onClick={() => {
              if (isDesktop === undefined) return;
              if (isDesktop) {
                openFolderDesktop();
              } else {
                openFolderMobile();
              }
            }}
            role="button"
            tabIndex={0}
            onFocus={() => setIsHoveringFolder(true)}
            onBlur={() => setIsHoveringFolder(false)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                if (isDesktop) {
                  openFolderDesktop();
                } else {
                  openFolderMobile();
                }
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
              width={271}
              height={192}
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
              width={265}
              height={256}
            />
            <Image
              id="folder-orgs"
              ref={folderOrgs}
              className="folder-asset"
              src="/images/page-assets/orgs.svg"
              alt=""
              width={245}
              height={240}
            />
            <Image
              id="folder-polaroid"
              ref={folderPolaroid}
              className="folder-asset"
              src="/images/page-assets/polaroid.svg"
              alt=""
              width={176}
              height={187}
            />
            <Image
              id="folder-main-content"
              ref={folderMainContent}
              className="folder-asset"
              src="/images/page-assets/main-content.svg"
              alt=""
              width={430}
              height={229}
            />
            <Image
              id="folder-feather"
              ref={folderFeather}
              className="folder-asset"
              src="/images/page-assets/feather.svg"
              alt=""
              width={202}
              height={229}
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
    </div>
  );
}
