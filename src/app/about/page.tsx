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
    <main className="about-container">
      <section className="about-section info">
        <h2 className="section-title">About</h2>
        <p>Learn, Connect, and Grow at Stride!</p>
        <p>
          Stride is a uniquely design-forward career fair connecting designers
          with company representatives. Students get the opportunity to showcase
          their work and experience, so we recommend that you bring a physical
          copy of your resume!
        </p>
        <p>Note: There will be a $7 registration fee</p>
        <div className="about-images">
          <Image
            src={Stride1}
            className="image1"
            alt="Students at career fair speaking with Apple employee who worked on Apple Vision Pro"
          />
          <Image
            src={Stride2}
            className="image2"
            alt="Two students sitting at table showing career fair postcard while smiling"
          />
          <Image
            src={Stride3}
            className="image3"
            alt="Multiple Google employees sitting on stage giving a talk"
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
