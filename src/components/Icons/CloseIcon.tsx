import { SVGProps } from 'react';

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-label="Close Registration Modal"
      width="100%"
      height="100%"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5003 31.0837C24.5545 31.0837 31.0837 24.5545 31.0837 16.5003C31.0837 8.44617 24.5545 1.91699 16.5003 1.91699C8.44617 1.91699 1.91699 8.44617 1.91699 16.5003C1.91699 24.5545 8.44617 31.0837 16.5003 31.0837Z"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M11.624 11.2285L21.3764 20.9809"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21.377 11.2285L11.6245 20.9809"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
