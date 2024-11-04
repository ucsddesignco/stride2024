'use client';

import Image from 'next/image';
import './Register.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import StrideLogo from '@/components/Register/StrideLogo';
import FeeTag from '@/components/Register/FeeTag';

export default function RegisterPage() {
  // This is to ensure users don't click on register button before the script is loaded
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.lu.ma/checkout-button.js';
    script.async = true;
    document.body.appendChild(script);
    setScriptLoaded(true);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main id="register-page-container">
      <div id="register-top">
        <h1 id="smaller-register-header">
          <span>Register For</span>
          <StrideLogo />
        </h1>
        <h1 id="larger-register-header">
          Register
          <span>
            For
            <Image
              src="/images/logos/stride-logo.svg"
              width={208}
              height={50}
              alt="Stride Logo"
            />
          </span>
        </h1>
        <p>Lorem Ipsum Dolor Sit Amet Include something about the $5 fee?</p>
      </div>
      <div id="register-bottom">
        <div id="luma-button-container">
          <a
            href="https://lu.ma/event/evt-tY8EjR5s2pogihW"
            id="luma-register-button"
            data-luma-action="checkout"
            data-luma-event-id="evt-tY8EjR5s2pogihW"
            style={{
              pointerEvents: scriptLoaded ? 'auto' : 'none',
              cursor: scriptLoaded ? 'pointer' : 'not-allowed'
            }}
          >
            <span>
              <Image
                src="/images/Icons/newtab-icon.svg"
                width={24}
                height={24}
                alt="New Tab"
                aria-hidden
              />
            </span>
            {scriptLoaded ? 'Register On Luma' : 'Loading...'}
          </a>
          <FeeTag id="register-fee-tag" />
        </div>

        <Link href="/badge" id="create-badge-button">
          Create Your Badge{' '}
          <span>
            <Image
              src="/images/Icons/right-arrow-icon.svg"
              width={23}
              height={18}
              alt="New Tab"
              aria-hidden
            />
          </span>
        </Link>
        <p>
          contact designatucsd@gmail.com for inquiries about financial
          assistance
        </p>
      </div>
    </main>
  );
}
