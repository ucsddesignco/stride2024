'use client';

import Image from 'next/image';
import './Navbar.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import StrideLogo from '../Register/StrideLogo';
import DCOLogo from './Logos/DCOLogo';
import InfoIcon from '../Icons/InfoIcon';

export default function Navbar() {
  const pathname = usePathname();

  const parsePathname = (currentPath: string) => {
    if (currentPath === '/') return 'Home';

    const page = currentPath.replace('/', '');
    return page.charAt(0).toUpperCase() + page.slice(1) || '';
  };

  useEffect(() => {
    const handleScroll = () => {
      const logo = document.getElementById('nav-stride-logo');
      if (!logo) return;
      if (window.scrollY > 0) {
        logo.classList.add('scrolled');
      } else {
        logo.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className={pathname === '/' ? 'home' : ''}>
      <Link id="nav-logo-container" href="/">
        <DCOLogo />
        <div id="nav-logo-current-page">
          <StrideLogo id="nav-stride-logo" />
          <p>/ {parsePathname(pathname)}</p>
        </div>
      </Link>

      <div id="nav-button-container">
        {pathname !== '/about' && (
          <Link id="about-button" href="/about">
            <span>
              <InfoIcon />
            </span>
            About <span className="longer-about-text">Stride</span>
          </Link>
        )}
        {pathname !== '/register' && pathname !== '/badge' && (
          <Link id="register-button" href="/register">
            Register <span className="longer-about-text">&nbsp;Now</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
