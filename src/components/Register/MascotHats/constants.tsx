import { ReactElement } from 'react';
import BeretHat from './BeretHat';
import Bowler from './Bowler';
import HawkHat from './HawkHat';
import IvanHat from './IvanHat';
import NerveHat from './NerveHat';
import TophatHat from './TophatHat';

type MascotHat = {
  name: string;
  component: ReactElement;
  iconSrc: string;
};

export const mascotHats: Record<string, MascotHat> = {
  bowler: {
    name: 'Bowler',
    component: <Bowler />,
    iconSrc: '/images/hat-icons/icon-bowler.svg'
  },
  beret: {
    name: 'Beret',
    component: <BeretHat />,
    iconSrc: '/images/hat-icons/icon-beret.svg'
  },
  hawk: {
    name: 'Hawk',
    component: <HawkHat />,
    iconSrc: '/images/hat-icons/icon-hawk.svg'
  },
  ivan: {
    name: 'ivan',
    component: <IvanHat />,
    iconSrc: '/images/hat-icons/icon-ivan.svg'
  },
  nerve: {
    name: 'nerve',
    component: <NerveHat />,
    iconSrc: '/images/hat-icons/icon-nerve.svg'
  },
  tophat: {
    name: 'tophat',
    component: <TophatHat />,
    iconSrc: '/images/hat-icons/icon-tophat.svg'
  }
};
