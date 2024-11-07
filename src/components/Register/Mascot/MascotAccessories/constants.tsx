import { ReactElement } from 'react';
import Glasses from './Glasses';
import Bowtie from './Bowtie';
import Monocle from './Monocle';
import Mustache from './Mustache';
import Suit from './Suit';

type MascotHat = {
  name: string;
  component: ReactElement | null;
  iconSrc: string;
};

export const MASCOT_ACCESSORIES: Record<string, MascotHat> = {
  glasses: {
    name: 'glasses',
    component: <Glasses />,
    iconSrc: '/images/accessory-icons/icon-glasses.svg'
  },
  bowtie: {
    name: 'bowtie',
    component: <Bowtie />,
    iconSrc: '/images/accessory-icons/icon-bowtie.svg'
  },
  monocle: {
    name: 'monocle',
    component: <Monocle />,
    iconSrc: '/images/accessory-icons/icon-monocle.svg'
  },
  mustache: {
    name: 'mustache',
    component: <Mustache />,
    iconSrc: '/images/accessory-icons/icon-mustache.svg'
  },
  suit: {
    name: 'suit',
    component: <Suit />,
    iconSrc: '/images/accessory-icons/icon-suit.svg'
  },
  default: {
    name: 'default',
    component: null,
    iconSrc: '/images/accessory-icons/icon-default.svg'
  }
};
