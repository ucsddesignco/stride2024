'use client';

import React from 'react';
import './About.scss';
import RegisterButton from '@/components/About/RegisterButton/RegisterButton';
import Opportunities from '@/components/About/Opportunities/Opportunities';
import Companies from '@/components/About/Companies/Companies';
import Agenda from '@/components/About/Agenda/Agenda';
import FAQ from '@/components/About/FAQ/FAQ';
import Image from 'next/image';
import Stride1 from '@/../public/images/past-photos/stride-1.webp';
import Stride2 from '@/../public/images/past-photos/stride-2.webp';
import Stride3 from '@/../public/images/past-photos/stride-3.webp';

export default function About() {
  return (
    <main id="about-container">
      <section className="about-section info">
        <h1 className="section-title">About</h1>
        <div id="about-description">
          <h3>Learn, Connect, and Grow at Stride!</h3>
          <p>
            Stride is a uniquely design-forward career fair connecting designers
            with company representatives. Students get the opportunity to
            showcase their work and experience, so we recommend that you bring a
            physical copy of your resume!
          </p>
          <p id="about-description-note">
            Note: There will be a $5 registration fee. Late registration will be
            a $7 fee.
          </p>
        </div>
        <div id="about-images">
          <Image
            src={Stride1}
            width={1402}
            height={934}
            id="about-image-1"
            alt="Students at career fair speaking with Apple employee who worked on Apple Vision Pro"
            priority
          />
          <Image
            src={Stride3}
            width={1400}
            height={933}
            id="about-image-3"
            alt="Multiple Google employees sitting on stage giving a talk"
            priority
          />
          <Image
            src={Stride2}
            width={1400}
            height={933}
            id="about-image-2"
            alt="Two students sitting at table showing career fair postcard while smiling"
            priority
          />
        </div>
      </section>
      <Opportunities />
      <Companies />
      <Agenda />
      <FAQ />
      <RegisterButton />
    </main>
  );
}
