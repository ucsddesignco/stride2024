'use client';

import Image from 'next/image';
import './Register.scss';
import { useState } from 'react';
import Link from 'next/link';
import StrideLogo from '@/components/Register/StrideLogo';
import FeeTag from '@/components/Register/FeeTag';
import RegisterAssets from '@/components/Register/RegisterAssets/RegisterAssets';
import { Dialog, Modal } from 'react-aria-components';

export default function RegisterPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main id="register-page-container">
      <Modal
        isDismissable
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        className="register-modal"
      >
        <Dialog>
          {({ close }) => (
            <div id="luma-iframe-container">
              <iframe
                src="https://lu.ma/embed/event/evt-tY8EjR5s2pogihW/simple"
                allowFullScreen
                title="Luma Registration"
                aria-hidden="false"
              />
              {/* <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="close-icon"
              >
                <Image
                  src="/images/icons/close-icon.svg"
                  width="35"
                  height="35"
                  alt="Close Registration Modal"
                />
              </button> */}
            </div>
          )}
        </Dialog>
      </Modal>

      <RegisterAssets />
      <div id="register-top">
        <h1 id="smaller-register-header">
          <span>Register For</span>
          <StrideLogo />
        </h1>
        <h1 id="larger-register-header">
          Register
          <span>
            For
            <StrideLogo />
          </span>
        </h1>
        <p>Lorem Ipsum Dolor Sit Amet</p>
        <p>Include something about the $5 fee?</p>
      </div>
      <div id="register-bottom">
        <div id="luma-button-container">
          <button
            id="luma-register-button"
            onClick={() => {
              setIsOpen(true);
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
            Register on Luma
          </button>
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
