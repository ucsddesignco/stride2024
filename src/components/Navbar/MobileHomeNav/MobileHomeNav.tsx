import Image from 'next/image';
import Link from 'next/link';
import './MobileHomeNav.scss';

export default function MobileHomeNav({ visible }: { visible: boolean }) {
  return (
    <div id="mobile-nav-button-container" className={visible ? '' : 'hide'}>
      <Link id="about-button" href="/about">
        <span>
          <Image
            src="images/icons/info-icon.svg"
            width={24}
            height={24}
            alt="Info Icon"
            aria-hidden="true"
          />
        </span>
        About
      </Link>
      <Link id="register-button" href="/register">
        Register
      </Link>
    </div>
  );
}
