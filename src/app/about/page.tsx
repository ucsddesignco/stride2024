'use client';

import React from 'react';
import './About.scss';
import RegisterButton from '@/components/About/RegisterButton/RegisterButton';
import Opportunities from '@/components/About/Opportunities/Opportunities';
import Companies from '@/components/About/Companies/Companies';
import Agenda from '@/components/About/Agenda/Agenda';
import FAQ from '@/components/About/FAQ/FAQ';

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
          <img src="images/past-photos/stride-1.jpg" className="image1" />
          <img src="images/past-photos/stride-2.jpg" className="image2" />
          <img src="images/past-photos/stride-3.jpg" className="image3" />
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
