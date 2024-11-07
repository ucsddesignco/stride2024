import Link from 'next/link';
import './MobileHomeNav.scss';
import InfoIcon from '@/components/Icons/InfoIcon';

export default function MobileHomeNav({ visible }: { visible: boolean }) {
  return (
    <div id="mobile-nav-button-container" className={visible ? '' : 'hide'}>
      <Link id="about-button" href="/about">
        <span>
          <InfoIcon />
        </span>
        About
      </Link>
      <Link id="register-button" href="/register">
        Register
      </Link>
    </div>
  );
}
