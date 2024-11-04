import { SVGProps } from 'react';

export default function RightArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.10947 2.79377L14.3146 7.99891M14.3146 7.99891L9.10947 13.204M14.3146 7.99891L0 7.99914"
        stroke="currentColor"
        strokeWidth="1.99985"
      />
    </svg>
  );
}
