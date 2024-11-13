'use client';

import MascotCircles from '@/components/MascotCircles/MascotCircles';
import QRCode from 'react-qr-code';
import React, { useEffect, useRef } from 'react';
import VerticalBar from './VerticalBar';
import HorizontalBar from './HorizontalBar';
import { MascotUserData, TFormData } from '../types';
import './MascotBadge.scss';
import StrideLogo from '../StrideLogo';

type ParsedFormData = {
  firstName: string;
  lastName: string;
  firstPronoun: string;
  secondPronoun: string;
  year: string;
};

const DEFAULT_VALUES = {
  name: 'Detective Duck',
  pronouns: 'They/Them',
  year: '???',
  link: ''
};

const parseFormData = (formData: TFormData): ParsedFormData => {
  const name = formData.name || DEFAULT_VALUES.name;
  const pronouns = formData.pronouns || DEFAULT_VALUES.pronouns;
  const lastNameIndex = name.indexOf(' ');
  const firstName = name.substring(0, lastNameIndex);
  const lastName = name.substring(lastNameIndex + 1);

  let [firstPronoun, secondPronoun] = pronouns.split(' ');
  if (pronouns.includes('/')) {
    [firstPronoun, secondPronoun] = pronouns
      .trim()
      .replace(/\s*\/\s*/, '/')
      .split('/');
  }
  return {
    firstName,
    lastName,
    firstPronoun,
    secondPronoun,
    year: formData.year || DEFAULT_VALUES.year
  };
};

type MascotBadgeProps = {
  formData: TFormData;
  shouldScale?: boolean;
  mascotData?: MascotUserData;
};

export default function MascotBadge({
  formData,
  shouldScale = false,
  mascotData
}: MascotBadgeProps) {
  const { firstName, lastName, firstPronoun, secondPronoun, year } =
    parseFormData(formData);

  const longNameDesign = firstName.length > 11 || lastName.length > 11;

  const defaultStyle = (field: keyof TFormData) => {
    const isDefault =
      !Object.keys(formData).includes(field) ||
      formData[field] === undefined ||
      formData[field] === '';
    return isDefault ? { color: 'gray' } : { color: 'white' };
  };

  const badgeContainerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const hasMeasured = useRef(false);

  useEffect(() => {
    if (!shouldScale) return;
    const badgeContainer = badgeContainerRef.current;
    const badge = badgeRef.current;
    if (badgeContainer && badge && !hasMeasured.current) {
      hasMeasured.current = true;
      const badgeContainerHeight = badgeContainer
        ? badgeContainer.getBoundingClientRect().height - 10
        : 0;
      const badgeWidth = badge?.getBoundingClientRect().width;
      // For Safari bug
      const badgeHeight = (badgeWidth * 3.2) / 2;

      if (badgeContainerHeight > 0 && badgeHeight > 0) {
        const badgeScale = badgeContainerHeight / badgeHeight;
        badge.style.transform = 'translateY(100%)';
        badge.style.height = `${badgeHeight}px`;
        badge.style.setProperty('--badge-scale', badgeScale.toString());
        badge.style.animation = 'SlideUpAndScale 1.5s forwards';
      }
    }
  }, [shouldScale]);

  return (
    <div id="mascot-badge-container" ref={badgeContainerRef}>
      <div id="mascot-badge" ref={badgeRef}>
        <div className="badge-top">
          <div className="long-hole" />
          <StrideLogo />
          <div className="long-hole" />
        </div>
        <div className="badge-center">
          <div
            className={`badge-center-top ${longNameDesign ? 'long-name' : ''}`}
          >
            <h2>
              <span style={defaultStyle('name')}>{firstName}</span>
              <span style={defaultStyle('name')}>{lastName}</span>
            </h2>
            <div id="badge-pronouns-container">
              <VerticalBar id="vertical-dotted-bar" aria-hidden />
              <p>
                <span style={defaultStyle('pronouns')}>{firstPronoun}/</span>
                <span style={defaultStyle('pronouns')}>{secondPronoun}</span>
              </p>
            </div>
          </div>
          <HorizontalBar id="horizontal-dotted-bar" aria-hidden />
          <div className="badge-center-center">
            <div className="badge-code">
              {formData?.link === undefined || formData?.link === '' ? (
                <div id="empty-qr-code" />
              ) : (
                <QRCode value={formData?.link || ''} />
              )}
            </div>
            <p style={{ opacity: year === 'NA' ? '0' : '1' }}>
              Class of <span style={defaultStyle('year')}>{year}</span>
            </p>
          </div>
        </div>
        <div className="badge-bottom">
          <MascotCircles mascotData={mascotData} />
        </div>
      </div>
    </div>
  );
}
