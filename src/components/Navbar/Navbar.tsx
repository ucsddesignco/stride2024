'use client';

import Image from 'next/image';
import './Navbar.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StrideLogo from '../Register/StrideLogo';

export default function Navbar() {
  const pathname = usePathname();

  const parsePathname = (currentPath: string) => {
    if (currentPath === '/') return 'Home';

    const page = currentPath.replace('/', '');
    return page.charAt(0).toUpperCase() + page.slice(1) || '';
  };

  return (
    <nav id="navbar">
      <Link id="nav-logo-container" href="/">
        {pathname === '/' && (
          <Image
            src="images/logos/dco-logo.svg"
            width={110}
            height={12}
            alt="Stride Logo"
          />
        )}
        {pathname === '/' ? (
          <StrideLogo id="nav-stride-logo" width="260" />
        ) : (
          <div id="nav-logo-current-page">
            <StrideLogo id="nav-stride-logo" width="130" />
            <p>/ {parsePathname(pathname)}</p>
          </div>
        )}
      </Link>

      {pathname === '/' ? (
        <div id="nav-home-button-container">
          <Link id="about-button" href="/about">
            <span>
              <Image
                src="images/icons/info-icon.svg"
                width={24}
                height={24}
                alt="Info Icon"
                aria-hidden="true"
              />
            </span>
            About <span className="longer-about-text">Stride</span>
          </Link>
          <Link id="register-button" href="/register">
            Register <span className="longer-about-text">Now</span>
          </Link>
        </div>
      ) : (
        <div id="nav-button-container">
          {pathname !== '/about' && (
            <Link id="about-button" href="/about">
              <span>
                <Image
                  src="images/icons/info-icon.svg"
                  width={24}
                  height={24}
                  alt="Info Icon"
                  aria-hidden="true"
                />
              </span>
              About <span className="longer-about-text">Stride</span>
            </Link>
          )}
          {pathname !== '/register' && (
            <Link id="register-button" href="/register">
              Register <span className="longer-about-text">Now</span>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
