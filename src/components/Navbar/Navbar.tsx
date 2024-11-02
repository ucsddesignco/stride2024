import Image from 'next/image';
import './Navbar.scss';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav id="navbar">
      <Link id="nav-logo-container" href="/">
        <Image
          src="images/logos/dco-logo.svg"
          width={110}
          height={12}
          alt="Stride Logo"
        />
        <Image
          src="images/logos/stride-logo.svg"
          width={260}
          height={60}
          alt="Stride Logo"
        />
      </Link>
      <div id="nav-button-container">
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
          About Stride
        </Link>
        <Link id="register-button" href="/register">
          Register Now
        </Link>
      </div>
    </nav>
  );
}
