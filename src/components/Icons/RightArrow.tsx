import { SVGProps } from 'react';

export default function RightArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7H17M17 7L11 13M17 7L11 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
