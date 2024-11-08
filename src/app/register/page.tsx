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
          <div id="luma-iframe-container">
            <iframe
              src="https://lu.ma/embed/event/evt-v7qQzON54Hs1IMN/simple"
              allowFullScreen
              title="Luma Registration"
              aria-hidden="false"
            />
          </div>
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
        <p>
          Registration is $5 if you register in advance and $7 if you register
          day-of.
        </p>
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M12.9 3L21 3M21 3L21 11.1M21 3L11 13"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M21 15.6V21H3V3H8.4"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </span>
            Register on Luma
          </button>
          <FeeTag id="register-fee-tag" />
        </div>

        <Link href="/badge" id="create-badge-button">
          Create Your Badge{' '}
          <span>
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M13.6642 1.19017L21.4718 8.99788M21.4718 8.99788L13.6642 16.8055M21.4718 8.99788L0 8.99823"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </span>
        </Link>
        <p>
          Contact designatucsd@gmail.com for inquiries about financial
          assistance.
        </p>
      </div>
    </main>
  );
}
